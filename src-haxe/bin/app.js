// Generated by Haxe 3.4.2
(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var React_Component = require("react").Component;
var HaxeJSApp = function(props,context) {
	React_Component.call(this,props,context);
};
HaxeJSApp.main = function() {
	ReactDOM.render({ "$$typeof" : $$tre, type : view_SomeApp, props : { }},window.document.getElementById("recat-app"));
};
HaxeJSApp.__super__ = React_Component;
HaxeJSApp.prototype = $extend(React_Component.prototype,{
});
var ReactDOM = require("react-dom");
var react_ReactMacro = function() { };
var view_SomeApp = function(props) {
	React_Component.call(this,props);
};
view_SomeApp.__super__ = React_Component;
view_SomeApp.prototype = $extend(React_Component.prototype,{
	render: function() {
		var tmp = $$tre;
		var tmp1 = { "$$typeof" : $$tre, type : "h2", props : { children : "HAXE + React"}};
		var tmp2 = { "$$typeof" : $$tre, type : "h3", props : { children : "Welcome Home!"}};
		return { $$typeof : tmp, type : "div", props : { style : { margin : "10px"}, children : [tmp1,tmp2,{ "$$typeof" : $$tre, type : view_ViewOne, props : { }}]}};
	}
});
var view_ViewOne = function(props) {
	React_Component.call(this,props);
};
view_ViewOne.__super__ = React_Component;
view_ViewOne.prototype = $extend(React_Component.prototype,{
	render: function() {
		var tmp = $$tre;
		var tmp1 = { "$$typeof" : $$tre, type : "h2", props : { children : "HAXE + React"}};
		return { $$typeof : tmp, type : "div", props : { style : { margin : "10px", backgroundColor : "#7ab8ef"}, children : [tmp1,{ "$$typeof" : $$tre, type : "h3", props : { children : "View One"}}]}};
	}
});
var $$tre = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
HaxeJSApp.displayName = "HaxeJSApp";
view_SomeApp.displayName = "SomeApp";
view_ViewOne.displayName = "ViewOne";
HaxeJSApp.main();
})();
