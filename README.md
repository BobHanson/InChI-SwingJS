# InChI-SwingJS

java2script/SwingJS is a method of writing Java/Swing source code such that it can be automatically co-compiled into Java class files and equivalent JavaScript "class" files. The Java-8 java2script transpiler is an Eclipse plug-in that accesses the same abstract syntax tree that is utilized by the Java compiler, generating JavaScript instead of bytecode. Combine that will an essentially full implementation of Java 8 runtime in JavaScript, and you have an application that runs the same in Java as in JavaScript, including proper dynamic class loading. It has been used in several projects, most notably [Jmol and JSpecView](https://github.com/BobHanson/Jmol-SwingJS), [JME](https://github.com/BobHanson/JME-SwingJS), [OpenChemLib](https://github.com/BobHanson/OCL-SwingJS), [JalView](https://www.jalview.org), and [Open Source Physics Tracker](https://physlets.org/tracker/), among others. 

The code in this repository is based on a combination of InChI-Web-Demo code and JNI-InChI code. It is forked from [InChI-Web-Demo](https://github.com/IUPAC-InChI/InChI-Web-Demo) but also includes code from [SureChEMBL JNI-InChI](https://github.com/SureChEMBL/jni-inchi). The idea is to create a single workflow that produces both the WASM and the JNI-InChI files we need in Jmol.

InChI generation is already implemented in Jmol in both Java and JavaScript (using JNI-InChI for Java and inchi-wasm for JavaScript). The Java implementation also taps the internal InChI model for generating stereochemically correct 2D and 3D structures *from* InChI. This project aims to also allow the production of 2D and 3D structures from InChI for the JavaScript side as well. 

The overall scheme for this functionality is shown below. Basically, InChIJNI.java handles the JNI-InChI interface for Java, and InChIJS.java (yes, ".java") handles the inchi-wasm interface for JavaScript. For SMILES generation, they both feed their respective models to InchiToSmilesConverter.java, which does the magic by creating a Jmol SMILES model, used for input to Jmol's SmilesGenerator.java. Note that this already works perfectly in Java.

![inchiChart](https://github.com/user-attachments/assets/5143fe27-c88b-4bdc-a003-83e967818ff8)

It is expected that this will require just a single method added to inchi-web.wasm. 

We already have both JNI-InChI and InChI-WASM working in both legacy Jmol and Jmol-SwingJS, so both in Java and JavaScript. This project aims to:

1) Combine the JNI code for Java with the WASM code for JavaScript in one maintainable package

2) Further develop the WASM interface to allow for reading the stereochemical parities the way JNI-InChI does now for Java

3) Upgrade both of these to accommodate the latest InChI versions with a single simple workflow

4) Integrate the update into Jmol and Jmol-SwingJS in order to complete the generation of structure from InChI with correct stereochemical parities and full 2D and 3D layout of the resultant structures in both Java and JavaScript modes. 

The strategy primarily involves creating a single new method in InChI-WASM, *get_model_json()*, which will deliver in JSON format the essential atom, bond, and stereochemical information similar to what JNI-InChI's wrapper does already (that is, not just a 0D mol file with no stereochemistry). 

This will ensure that both Java and JavaScript implementations of both Jmol-SwingJS and legacy Jmol remain consistent and enable both to do what only Java right now can do, which is to generate well-laid-out structures from InChI.  

And it will allow any web application using OpenChemLib, Jmol, the JmolDataD library, or any other implementation of inchi-wasm or JNI-InChI to do the same. In Java or JavaScript.

    
