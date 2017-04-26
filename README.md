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

I have added the above steps into `package.json`
 - `npm run 2HaxeJS`
 - `npm run 2BabelJS`
 - `npm run packJS`
 - `npm run show`
 - Now open a browser and navigate to `http://localhost:1234/`

See the output by 
 - Run a webserver and open `home.html`

### Note
 - Critical are the two config files `build.hxml` and `package.json`. Everything else is just a compile and run. Upon Compiling, it will create two folders `src-haxe/bin` and `build`.

 - To run this project
  - install node packages `npm install`
  - install haxelibs `haxelib install react`
  - compile with HAXE `haxe build.hxml`
  - pack with Webpack `npm run packJS`

## This is a 2 fold project
 
 - One can just compile everything to a single .js file with [HAXE][2]
 - Once can compile every .hx file to .js file in [HAXE][2] and entry file is just a .js file `BabelJSApp.js` in folder `src-haxe/bin`
  - Then compile all these with [Babel][4]
 - Now pack them with [Webpack][5]
 - That's upto you , which path to follow



[1]: https://facebook.github.io/react/ 
[2]: http://haxe.org/
[3]: https://github.com/massiveinteractive/haxe-react
[4]: https://babeljs.io/
[5]: https://webpack.github.io/
