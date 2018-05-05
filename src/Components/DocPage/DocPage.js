import LearnPage from "../LearnPage/LearnPage";
import Route from "react-router-dom/es/Route";
import React from "react";
import {Link} from "react-router-dom";

class DocPage extends React.Component {
    render(){
        return(
            <div className = 'list-learn'>
                <div className = 'topic' >
                <br/>
                    <Link to={'doc/learn/'}>Code</Link>
                </div>
            </div>
        )
    }
}

export default DocPage;