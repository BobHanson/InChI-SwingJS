For distribution files, see the docs/inchi folder.

There you fill find inchi-web-SwingJS.js 
and its alternative inchi-web.js, either of which can be
used in any JavaScript project. The difference is that 
inchi-web-SwingJS.js allows for just-in-time dynamic 
loading of inchi WASM, which inchi-web.js is more like
the code used in the InChI-WEB_DEMO node-based code, which
does not allow for dynamic loading (that I know of).

Also, in this directory is inchi-web.wasm. That is the 
product of a linux make from the inchi/INCHI_WEB/ directory. 

inchi.js is used with inchi-web.js and provides standard 
asynchronous JavaScript calls into inchi-web.js

For the equivalent Java distribution, see JNA-InChI-SwingJS. 


inchi1.js is used with inchi-web-SwingJS.js to provide
synchronous JavaScript calls into inchi-web-SwingJS.js. 
These calls are necessarily synchronous because SwingJS
in most cases uses direct calls for methods such as 
script x=inchi('xxxx') in Jmol. 

In SimpleDemo/ you will find two very simple demos.
 
index.html demonstrates how simple it is to plug InChI-WASM
into an asynchronous setting such as node.js. 

index1.html does the same for dynamic loading sites, particularly
SwingJS. 

Note that the synchronous mode is also implemented in Jmol,
Jmol-SwingJS, JME-SwingJS, and OCL-SwingJS. For example, Jmol 
allows commands such as 

$ load $caffeine;
$ print this.inchi();

and

$ print "InChI=1S/C8H10N4O2/c1-10-4-9-6-5(10)7(13)12(3)8(14)11(6)2/h4H,1-3H3".smiles();

Note that "the big deal" here is all of these programs now allow
for full standard or fixed-H InChI to structure, with stereohemistry.
While this has been possible in proprietary Java packages, 
we believe that this is the first time it has been made available
in JavaScript as well as Java, and in a way that can easily be
maintained as inchi C is developed and its API is expanded.
