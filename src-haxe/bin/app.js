// Generated by Haxe 3.4.2
(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var React_Component = require("react").Component;
var HaxeJSApp = function() {
	React_Component.call(this);
};
HaxeJSApp.main = function() {
	ReactDOM.render({ "$$typeof" : $$tre, type : HaxeJSApp, props : { }},window.document.getElementById("recat-app"));
};
HaxeJSApp.statelessComponent = function(props) {
	return { "$$typeof" : $$tre, type : "div", props : Object.assign({ },props,{ children : " Haxe + React "})};
};
HaxeJSApp.__super__ = React_Component;
HaxeJSApp.prototype = $extend(React_Component.prototype,{
	render: function() {
		var cname = "foo";
		return { "$$typeof" : $$tre, type : "div", props : { className : cname, children : { "$$typeof" : $$tre, type : HaxeJSApp.statelessComponent, props : { style : { margin : "10px"}}}}};
	}
});
var ReactDOM = require("react-dom");
var react_ReactMacro = function() { };
var $$tre = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
HaxeJSApp.displayName = "HaxeJSApp";
HaxeJSApp.main();
})();
