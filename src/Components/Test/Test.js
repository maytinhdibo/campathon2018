import React from "react";
import {Switch, Route} from "react-router-dom";

class Test  extends React.Component {
    render(){
        return(
            <div className = 'test-com'>
            <div className="browser">
            dsfdsfdf
            <input/>
            </div>
                <Switch>
                    <Route exact path={"/test/:id"} component={Test}/>
                </Switch>
            </div>
        )
    }
}

export default Test;