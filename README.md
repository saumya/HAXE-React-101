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




[1]: https://facebook.github.io/react/ 
[2]:  http://haxe.org/
[3]: https://github.com/massiveinteractive/haxe-react