# InChI-SwingJS

Our work in InChI-SwingJS is essentially complete. We have added a method to our fork of Inchi-Web, <b>model_from_inchi</b> that returns a JSON structure [[example](https://drive.google.com/file/d/1NfbK9kfmRsZ5Ektw9P_zWNUSX8Srptkz/view?usp=sharing)] giving all the atom, bond, and stereo0d information necessary to create full 2D and 3D structures from InChI. Enormous thanks to Frank Lange for his assistance and for leading the way with Inchi-Web. Check out our [super-simple demo](https://bobhanson.github.io/InChI-SwingJS/SimpleDemo/index1.html) to see how simple it is to add the InChI (1.07) library to a JavaScript page.
See [our chronicle Google Doc](https://docs.google.com/document/d/1-Q1PfzbVYcvl-gJL-ufEzx4_uGOmLzXr1IQiyscANbM/edit?usp=sharing) for a detailed description of how we adapted INCHI-WEB wasm for this project.
        
java2script/SwingJS is a method of writing Java/Swing source code such that it can be automatically co-compiled into Java class files and equivalent JavaScript "class" files. The Java-8 java2script transpiler is an Eclipse plug-in that accesses the same abstract syntax tree that is utilized by the Java compiler, generating JavaScript instead of bytecode. Combine that will an essentially full implementation of Java 8 runtime in JavaScript, and you have an application that runs the same in Java as in JavaScript, including proper dynamic class loading. It has been used in several projects, most notably [Jmol and JSpecView](https://github.com/BobHanson/Jmol-SwingJS), [JME](https://github.com/BobHanson/JME-SwingJS), [OpenChemLib](https://github.com/BobHanson/OCL-SwingJS), [JalView](https://www.jalview.org), and [Open Source Physics Tracker](https://physlets.org/tracker/), among others. 

This InChI-SwingJS project does not use java2script/SwingJS itself. It is simply the place where we are creating the components that are being used in SwingJS poject that we are involved with. 

The code in this repository is based on a combination of InChI-Web-Demo code and JNI-InChI code. It is forked from [InChI-Web-Demo](https://github.com/IUPAC-InChI/InChI-Web-Demo) but also includes code from [SureChEMBL JNI-InChI](https://github.com/SureChEMBL/jni-inchi). The idea is to create a single workflow that produces both the WASM and the JNI-InChI files we need in Jmol. 

InChI 1.03 generation is already implemented in Jmol in both Java and JavaScript (using JNI-InChI for Java and inchi-wasm for JavaScript). The Java implementation also taps the internal InChI model for generating stereochemically correct 2D and 3D structures *from* InChI. This project aims to also allow the production of 2D and 3D structures from InChI for the JavaScript side as well. 

The overall scheme for this functionality is shown below. Basically, InChIJNI.java handles the JNI-InChI interface for Java, and InChIJS.java (yes, ".java") handles the inchi-wasm interface for JavaScript. For SMILES generation, they both feed their respective models to InchiToSmilesConverter.java, which does the magic by creating a Jmol SMILES model, used for input to Jmol's SmilesGenerator.java. Note that this already works perfectly in Java. 

In the figure below, heavy black lines were done previously; red lines and thin black lines were completed the week of Jan 21-25, 2025, assisted by St. Olaf student Josh Charlton, who was a particpant in the first (annual?) Jmol User Experience Internship January "J-Term" project. You can see his final presentation [here](https://drive.google.com/file/d/1Ve2py6Qpn0BHeQc6j5hRhHJLvAw_mtXv/view?usp=drive_link). 

![inchiChartDone](https://github.com/user-attachments/assets/ef955e36-4d9c-4625-ae94-16f3c14b9a15)

We already had both JNI-InChI and InChI-WASM working in both legacy Jmol and Jmol-SwingJS, so both in Java and JavaScript. The work outside of Jmol only required the addtion of a single exported method in inchi-web.c, specifically [model_from_inchi](https://github.com/BobHanson/InChI-SwingJS/blob/b2ab44074c69694d15cdd82a5f311296f51a308c/inchi/INCHI_WEB/inchi_web.c#L623). There were no particular issues with this development, which is outlined in [this Google Doc](https://docs.google.com/document/d/1-Q1PfzbVYcvl-gJL-ufEzx4_uGOmLzXr1IQiyscANbM/edit?usp=sharing).

The new method in inchi-web.wasm delivers in JSON format the essential atom, bond, and stereochemical information identical to what JNI-InChI's wrapper does already. Concurrently, we adapted our implemenation of JNI-InChI to also create a JSON model structure. 

This project aimed to:

1) Combine the JNI code for Java with the WASM code for JavaScript in one maintainable package

2) Further develop the WASM interface to allow for reading the stereochemical parities the way JNI-InChI does now for Java

3) Upgrade both of these to accommodate the latest InChI versions with a single simple workflow

4) Integrate the update into Jmol and Jmol-SwingJS in order to complete the generation of structure from InChI with correct stereochemical parities and full 2D and 3D layout of the resultant structures in both Java and JavaScript modes. 

This ensures that both Java and JavaScript implementations of both Jmol-SwingJS and legacy Jmol remain consistent and enable both to do what only Java right now can do, which is to generate well-laid-out structures from InChI.  

And it allows any web application using OpenChemLib, Jmol, the JmolDataD library, or any other implementation of inchi-wasm or JNI-InChI to do the same. In Java or JavaScript.

Current status is that all steps are complete except for upgrading the JNI-InChI Java code from InChI 1.03 to 1.07. We have made some progress on that (see our [chronicle](https://docs.google.com/document/d/194GQJlXE3moJPindEKu0m8YHLcCgq-Nc_BXxpRgCFvE/edit?usp=sharing), but we haven't yet mastered the way to cross-compile to the newer Mac aarch platfrom required for JNI-InChI to work on more recent Mac OS X machines.
