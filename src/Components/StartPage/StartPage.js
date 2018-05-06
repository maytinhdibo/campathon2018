import React from "react";
import '../../Style/index.css';
import { Animated } from "react-animated-css";
import {Link} from "react-router-dom"
class StartPage extends React.Component {

    render() {
        const listLearn = this.props.data.name.map((name , index)=>{
            return  <li key={index}><Link  to={'doc/'+(index+1).toString()}><span className={'number-list'}>{(index+1).toString()}</span></Link>{name}</li>
        });

        return (
            <div>
                <div className={'header'}>
                    <Animated animationIn="fadeInRight" isVisible={true}>
                        <div className={'header-text'}>
                            <span>REACT LEARN LIVE</span>
                            <p>Trang web đào tạo ReactJs<br />
                                <i>Một sản phẩm của team Mtc UET Campathon 2018</i>
                            </p>
                        </div>
                    </Animated>
                    <Animated animationIn="fadeInUp" isVisible={true}>
                        <Link  to = '/doc/1' className={'start-button'}>BẮT ĐẦU</Link>
                    </Animated>
                </div>

                <ul className={'list-learn'}>
                    {listLearn}
                </ul>

            </div>
        );
    }
}
export default StartPage;