import React from "react";

class Test  extends React.Component {
    render(){
        return(
            <div className = 'test-com'>
                <Switch>
                    <Route exact path={"/test"} component={Test}/>
                </Switch>
            </div>
        )
    }
}

export default Test;