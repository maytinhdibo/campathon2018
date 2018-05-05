import React from "react";
import Header from "./../Header";
import Navbar from "./../Navbar";

class DocPage extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        const self = this;
        console.log(self.props.match.params.id);
        const  id = self.props.match.params.id;
        fetch('http://localhost:8080/output?file='+id+'/doc.html')
            .then(function (response) {
                response.text().then(function (text) {
                    document.getElementById('doc-content').innerHTML = text;
                });
            })
    }
    render(){

        return(
            <div>
                <Header/>
                <Navbar data={this.props.data} />
                <div id ='doc-content'></div>
            </div>
        )
    }

}

export default DocPage;