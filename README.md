# InChI-SwingJS

This project aims to create the simplest implementation of InChI in JavaScript as possible. No frills; just function.

Testing modifications to InChI C/C++ code to enable simple Java and JavaScript access using Java classes created for Jmol-SwingJS as well as legacy Jmol using Java Native Interface. 

This code is based on a combination of IUPAC-InChI code from both the core InChI project and InChI-Web-Demo, along with JNI-InChI code.

It is cloned from [InChI-Web-Demo](https://github.com/IUPAC-InChI/InChI-Web-Demo) but also includes code from [https://github.com/SureChEMBL/jni-inchi](Sam Adam's from 2011)

We already have both JNI-InChI and InChI-WASM working in both legacy Jmol and Jmol-SwingJS, so both in Java and JavaScript. This project aims to:

1) Combine the JNI code for Java with the WASM code for JavaScript in one maintainable package

2) Further develop the WASM interface to allow for reading the stereochemical parities the way JNI-InChI does

3) Upgrade both of these to accommodate the latest InChI verions with a single simple workflow

4) Integrate the update into Jmol and Jmol-SwingJS in order to complete the generation of structure from InChI with correct stereochemical parities and full 2D and 3D layout of the resultant structures in both Java and JavaScript modes. 

The strategy primarily involves creating a single new method in InChI-WASM get_model_json(), which will deliver the essential atom, bond, and stereochemical information that JNI-InChI's wrapper does already, not just a 0D mol file with no stereochemistry. 

This will ensure that both Java and JavaScript implementations of both Jmol-SwingJS and legacy Jmol remain consistent and enable both to do what only Java right now can do, which is to generate well-laid-out structures from InChI.  

    
