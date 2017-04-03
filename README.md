HAXE-JS-React-101
==================
 The experiments of [reactJS][1] with [HAXE][2]
 
 This uses the [haxe-react][3] library

### Setup
 - init `npm init`
 - configure package.json
 - install the required `npm` packages
 - create `build.hxml` and configure it
 - install `haxelib install react`, this is one time per computer
 - add the lib to `build.hxml`

The build is 2 step process.
 - Compile with [HAXE][2] `haxe build.hxml`
 - Pack with webpack `npm run pack`

See the output by 
 - Run a webserver and open `home.html`

### Note
 - Critical are the two config files `build.hxml` and `package.json`. Everything else is just a compile and run. Upon Compiling, it will create two folders `src-haxe/bin` and `build`.

 - To run this project
  - install node packages `npm install`
  - install haxelibs `haxelib install react`
  - compile with HAXE `haxe build.hxml`
  - pack with Webpack `npm run packJS`




[1]: https://facebook.github.io/react/ 
[2]:  http://haxe.org/
[3]: https://github.com/massiveinteractive/haxe-react