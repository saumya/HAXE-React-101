/**
 *
 * A Haxe JS application with reactJS
 *
**/

import js.Browser;

import react.React;
import react.ReactDOM;
import react.ReactComponent;
import react.ReactMacro.jsx;

class HaxeJSApp extends ReactComponent{
    static public function main(){
        ReactDOM.render(jsx('<HaxeJSApp />'), Browser.document.getElementById('recat-app'));
    }

    public function new(){
        super();
    }
    override function render(){
        var cname = 'foo';
		return jsx('
			<div className=$cname>
				<HaxeJSApp.statelessComponent style=${{margin:"10px"}}/>
				
			</div>
		');
    }

    static function statelessComponent(props:Dynamic) {
		return jsx('<div {...props}> Haxe + React </div>');
	}
}