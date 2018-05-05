import React from "react";
import {Link} from "react-router-dom";
import '../Style/Navbar.css';

class NavBar extends  React.Component {



    render(){
        const listName = this.props.data.name;
        const listTopic =  listName.map((name , index)=>{
            return (
                <div className = 'topic' key={index}>
                    {name}
                    <Link to={'doc/learn/'}>Tài liệu</Link>
                    <Link to={'doc/learn/'}>Luyện tập</Link>
                </div>
            );
        });
        return(
            <div id = 'navbar-hidden'>
                <div className="nav">
                    <div className="back" onClick={this.hiddenNavbar}>&lsaquo;</div>
                    {listTopic}
                </div>
            </div>
        );
    }

}

export default NavBar;