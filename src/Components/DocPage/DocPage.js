import React from "react";
import Header from "./../Header";
import Navbar from "./../Navbar";
import {Link, Redirect} from "react-router-dom";

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
        const  id = self.props.match.params.id;
        fetch('http://localhost:8080/output?file='+id+'/doc.html&&read=true')
            .then(function (response) {
                response.text().then(function (text) {
                    document.getElementById('doc-content').innerHTML = text;
                });
            })
    }
    componentDidUpdate(){
        document.getElementsByClassName('nav')[0].style.left = '-1000px';
        const self = this;
        const  id = self.props.match.params.id;
        fetch('http://localhost:8080/output?file='+id+'/doc.html&&read=true')
            .then(function (response) {
                response.text().then(function (text) {
                    document.getElementById('doc-content').innerHTML = text;
                });
            })
    }
    render(){
        const  _id = this.props.match.params.id;
        return(
            <div>
                <Header/>
                <Navbar data={this.props.data} />
                <div id='doc-content'/>
                <Link to={'/doc/'+_id.toString()+'/learn/'}>Thử nào!</Link>
            </div>
        )
    }

}

export default DocPage;