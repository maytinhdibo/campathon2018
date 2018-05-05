import React from "react";

class Header extends React.Component {
    render(){
        return(
            <div className={'headerTop'}>
            <img className="menu" src="/img/menu.png" onClick={this.visiableNavbar}/>
            <span>ReactJS Live Training</span>
            </div>
        )
    }

    visiableNavbar=()=>{
        document.getElementsByClassName('nav')[0].style.left = "0px";
    }
}

export  default Header;