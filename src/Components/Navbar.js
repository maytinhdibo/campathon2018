import React from "react";
import {Link} from "react-router-dom";

class NavBar extends  React.Component {



    render(){
        const home = <Link id='home' to = '/' >Trang chủ</Link>
        const doc = <Link id = 'doc' to = '/doc'>Danh sách bài học</Link>
        return(
            <div className = 'navbar'>
                {home}
                {doc}
            </div>
        )
    }

}

export default NavBar;