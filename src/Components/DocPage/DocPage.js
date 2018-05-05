import React from "react";
import Header from "./../Header";
import Navbar from "./../Navbar";
const ReactMarkdown = require('react-markdown')

class DocPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            text:"test"
        };
        this.setState(this.state);
    }
    componentDidMount(){
        const self = this;
        console.log(self.props.match.params.id);
        const  id = self.props.match.params.id;
        fetch('http://localhost:8080/output?file='+id+'/doc.html')
            .then(function (response) {
                response.text().then(function (text) {
                    document.getElementById('doc-content').innerHTML = text;
                    self.state={
                        text:text
                    }
                    self.setState(self.state);
                });
            })
    }
    render(){
        const input = `
        ## Tables?

        | Feature | Support |
        | ------ | ----------- |
        | tables | ✔ |
        | alignment | ✔ |
        | wewt | ✔ |
        
        ## More info?
        `;
        return(
            <div>
                <Header/>
                <Navbar data={this.props.data} />
                <ReactMarkdown escapeHtml={true} source={this.state.text} />
                <div id='doc-content'></div>
            </div>
        )
    }

}

export default DocPage;