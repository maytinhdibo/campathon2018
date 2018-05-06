import React from "react";
import Header from "./../Header";
import Navbar from "./../Navbar";
import {Link} from "react-router-dom";

class DocPage extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comment:<div className="fb-comments" data-href={window.location.href} data-numposts="5"></div>
        }
    }
    fech=()=>{
        document.getElementsByClassName('nav')[0].style.left = '-1000px';
        const self = this;
        const  id = self.props.match.params.id;
        fetch('http://localhost:8080/output?file='+id+'/doc.html&&read=true')
            .then(function (response) {
                response.text().then(function (text) {
                    document.getElementById('doc-content').innerHTML = text;
                    document.querySelector("iframe").contentWindow.location.reload();
                });
            })
    }
    componentDidMount(){
        this.fech();
    }
    componentDidUpdate(prevProps){
            this.fech();
    }
    render(){
        const  _id = this.props.match.params.id;
        return(
            <div>
                <Header/>
                <Navbar data={this.props.data} />
                <div id='doc-content'/>
                <Link to={'/doc/'+_id.toString()+'/learn/'} id="try-it"> &#9654;</Link>
                {/* <div className="fb-comments" data-href={window.location.href} data-numposts="5"></div> */}
                <iframe height="400px" id="iframe" src={"/iframe.html#"+window.location.href}/>
            </div>
        )
    }

}

export default DocPage;

