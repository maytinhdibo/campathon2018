import React from "react";

class Header extends React.Component {
    render(){
        return(
            <div className={'headerTop'}>
            <img className="menu" src="/img/menu.png"/>
            <span>ReactJS Live Training</span>
            </div>
        )
    }
}

export  default Header;