import LearnPage from "../LearnPage/LearnPage";
import Route from "react-router-dom/es/Route";
import React from "react";
import {Link} from "react-router-dom";
import Header from "./../Header";

class DocPage extends React.Component {
    render(){

        const listName = this.props.data.name;

        const listTopic =  listName.map((name)=>{
            return (
                <div className = 'topic'>
                    {name}
                    <Link to={'doc/learn/'}>Tài liệu</Link>
                        <Link to={'doc/learn/'}>Luyện tập</Link>
                </div>
            );
        });
        return(
            <div>
                <Header/>
            <div className="nav">
            <div className="back">&lsaquo;</div>
                {listTopic}
            </div>
            </div>
        )
    }
}

export default DocPage;