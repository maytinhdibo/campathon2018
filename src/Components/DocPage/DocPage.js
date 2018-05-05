import React from "react";
import Header from "./../Header";
import Navbar from "./../Navbar";

class DocPage extends React.Component {
    render(){


        return(
            <div>
                <Header/>
                <Navbar data={this.props.data} />
            </div>
        )
    }

}

export default DocPage;