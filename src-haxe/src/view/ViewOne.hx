//
package view;

import react.React;
import react.ReactDOM;
import react.ReactComponent;
import react.ReactMacro.jsx;

class ViewOne extends ReactComponent{
    public function new(props:Dynamic){
        super(props);
    }
    override public function render(){
        return jsx('
            <div style={{margin:"10px",backgroundColor:"#7ab8ef"}}>
                <h2>HAXE + React</h2>
                <h3>View One</h3>
            </div>
        ');
    }
}