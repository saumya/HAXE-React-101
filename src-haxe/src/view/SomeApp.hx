//
package view;

import react.React;
import react.ReactDOM;
import react.ReactComponent;
import react.ReactMacro.jsx;

import view.ViewOne;

@:expose("SomeApp")
class SomeApp extends ReactComponent{
    public function new(props:Dynamic){
        super(props);
    }
    override public function render(){
        return jsx('
            <div style={{margin:"10px"}}>
                <h2>HAXE + React</h2>
                <h3>Welcome Home!</h3>
                <ViewOne />
            </div>
        ');
    }
}