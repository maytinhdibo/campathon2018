import React from "react";
import {Link} from "react-router-dom";

class Header extends React.Component {
    render(){
        return <div className={'headerTop'}>
            <img className="menu" src='/img/menu.png' alt={'asdhgasjd'} onClick={this.visiableNavbar}/>
            <Link className='header-name' to={'/'}>ReactJS Live Training</Link>
        </div>
    }

    visiableNavbar=()=>{
        document.getElementsByClassName('nav')[0].style.left = "0px";
    }
}

export  default Header;