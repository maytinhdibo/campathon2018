import LearnPage from "../LearnPage/LearnPage";
import Route from "react-router-dom/es/Route";
import React from "react";
import {Link} from "react-router-dom";

class DocPage extends React.Component {
    render(){

        const listName = this.props.data.name;

        const listTopic =  listName.map((name)=>{
            return (
                <div className = 'topic'>
                    {name}
                    <div className = 'learn-doc'>Tài liệu:
                        <br/>
                        <Link to={'doc/learn/'}>Code</Link>
                    </div>
                </div>
            );
        });
        return(
            <div >
                {listTopic}
            </div>
        )
    }
}

export default DocPage;