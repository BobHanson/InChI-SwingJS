# InChI-SwingJS

Our work in InChI-SwingJS is essentially complete. We have added a method to our fork of Inchi-Web, <b>model_from_inchi</b> that returns a JSON structure [[example](https://drive.google.com/file/d/1NfbK9kfmRsZ5Ektw9P_zWNUSX8Srptkz/view?usp=sharing)] giving all the atom, bond, and stereo0d information necessary to create full 2D and 3D structures from InChI. Enormous thanks to Frank Lange for his assistance and for leading the way with Inchi-Web. Check out our [super-simple demo](https://bobhanson.github.io/InChI-SwingJS/SimpleDemo/index1.html) to see how simple it is to add the InChI (1.07) library to a JavaScript page.
See [our chronicle Google Doc](https://docs.google.com/document/d/1-Q1PfzbVYcvl-gJL-ufEzx4_uGOmLzXr1IQiyscANbM/edit?usp=sharing) for a detailed description of how we adapted INCHI-WEB wasm for this project.

We have also replaced JNI-InChI with JNA-InChI (with just one tweak there, in InchiFlags.java.) Enormous thanks to David Lowe and John Mayfield and friends for maintaining the JNA-InChI project. 

inchi is now a 1.07.2 for both Java and JavaScript. 
      
java2script/SwingJS is a method of writing Java/Swing source code such that it can be automatically co-compiled into Java class files and equivalent JavaScript "class" files. The Java-8 java2script transpiler is an Eclipse plug-in that accesses the same abstract syntax tree that is utilized by the Java compiler, generating JavaScript instead of bytecode. Combine that will an essentially full implementation of Java 8 runtime in JavaScript, and you have an application that runs the same in Java as in JavaScript, including proper dynamic class loading. It has been used in several projects, most notably [Jmol and JSpecView](https://github.com/BobHanson/Jmol-SwingJS), [JME](https://github.com/BobHanson/JME-SwingJS), [OpenChemLib](https://github.com/BobHanson/OCL-SwingJS), [JalView](https://www.jalview.org), and [Open Source Physics Tracker](https://physlets.org/tracker/), among others. 

This InChI-SwingJS project does not use java2script/SwingJS itself. It is simply the place where we are creating the WASM component that is used in SwingJS projects that we are involved with. (Specifically going into OCL-SwingJS, which is imported from JME-SwingJS, which is imported from JmolSwingJS. Jmol (legacy) also imports the WASM code generated here. 

The code in this repository is based on InChI-Web-Demo code, without the extensive GUI that is there. It is forked from [InChI-Web-Demo](https://github.com/IUPAC-InChI/InChI-Web-Demo)

This project provides the InChI 1.07 used in the JavaScript for Jmol, Jmol-SwingJS, JME-SwingJS, and OCL-SwingJS. Both this and the Java implementation (JNA-InChI-SwingJS) tap the internal InChI model for generating stereochemically correct 2D and 3D structures *from* InChI. 

The overall scheme for this functionality is shown below. Basically, InChIJNA.java handles the JNA-InChI interface for Java, and InChIJS.java (yes, ".java") handles the inchi-wasm interface for JavaScript. For SMILES generation, they both feed their respective models to InchiToSmilesConverter.java, which does the magic by creating a Jmol SMILES model, used for input to Jmol's SmilesGenerator.java. Note that this already works perfectly in Java. 

The operation in OCL-SwingJS is a bit different, but basically the same idea.

In the figure below, heavy black lines were done previously
using JNI-InChI; red lines and thin black lines were completed the week of Jan 21-25, 2025, assisted by St. Olaf student Josh Charlton, who was a particpant in the first (annual?) Jmol User Experience Internship January "J-Term" project. You can see his final presentation [here](https://drive.google.com/file/d/1Ve2py6Qpn0BHeQc6j5hRhHJLvAw_mtXv/view?usp=drive_link). 

![inchiChartDone](https://github.com/user-attachments/assets/ef955e36-4d9c-4625-ae94-16f3c14b9a15)

Note that just after this internship was completed, we were able to dispense with JNI-InChI (as it was not maintainable) and switch to JNA-InChI, which is being maintained separately at the JNA-InChI project. (JNA-InChI-SwingJS makes only a very
slight change to that code.)

We already had both JNI-InChI and InChI-WASM working in both legacy Jmol and Jmol-SwingJS, so both in Java and JavaScript. The work outside of Jmol only required the addition of a single exported method in inchi-web.c, specifically [model_from_inchi](https://github.com/BobHanson/InChI-SwingJS/blob/b2ab44074c69694d15cdd82a5f311296f51a308c/inchi/INCHI_WEB/inchi_web.c#L623). There were no particular issues with this development, which is outlined in [this Google Doc](https://docs.google.com/document/d/1-Q1PfzbVYcvl-gJL-ufEzx4_uGOmLzXr1IQiyscANbM/edit?usp=sharing).

The new method in inchi-web.wasm delivers in JSON format the essential atom, bond, and stereochemical information identical to what JNI-InChI's wrapper does already. Concurrently, we adapted our implemenation of JNI-InChI to also create a JSON model structure. 

We also added a JSON "ver" key that reports the version of inchi being used. 

This project aimed to:

1) Combine the JNI code for Java with the WASM code for JavaScript in one maintainable package

2) Further develop the WASM interface to allow for reading the stereochemical parities the way JNI-InChI does now for Java

3) Upgrade both of these to accommodate the latest InChI versions with a single simple workflow

4) Integrate the update into Jmol and Jmol-SwingJS in order to complete the generation of structure from InChI with correct stereochemical parities and full 2D and 3D layout of the resultant structures in both Java and JavaScript modes. 

In the end, 

1) We abandoned JNI-InChI in favor of JNA-InChI, making the separate maintenance of the Java essentially 
unnecessary. 

2) We augmented the WASM code from INCHI_WEB_DEMO in relatively simple ways that could easily be brought into that project. We 
just decided perhaps we should just implement them here for now.

3) Both inchi-wasm and JNA-InChI were updated to 1.07. We still
maintain our wasm image here; we leave the maintenance of JNA-InChI to others who are better equipped to build the necessary
shared objects and dll files needed for the various platform-dependent architectures that must be built and included in the JNA-InChI JAR file.

4) We have now fully integrated both JavaScript and Java implementation of inchi C 1.07.2 into Jmol, Jmol-SwingJS, 
JME-SwingJS, and OCL-SwingJS. (The Java InChI business is
all done in OCL-SwingJS. Then OCL-SwingJS.jar is imported
into JME-SwingJS, and JME-SwingJS is imported into Jmol-SwingJS. Jmol (on SourceForge) has its own JNA-InChI.jar import.)
 
Our work allows any web application using OpenChemLib, Jmol, the JmolDataD library, or any other implementation of inchi-wasm or JNA-InChI to do the same. In Java or JavaScript.

As of Feb 16, 2025, the status is that all steps are complete, including implementation in JavaScript of inchi 1.07.2, and upgrading of the Java code from InChI 1.03 to 1.07.2 (as well switching to JNA-InChI for Java). 

As of April 20, 2025, a fully integrated CDK/OpenChemLib/JNA-InChI/InChI-WASM java2script/SwingJS JavaScript implementation with streamlined single-file JavaScript packaging and single-file assets packaging has been deployed. (see https://bobhanson.github.io/InChI-SwingJS/web-demo). 


