import React from "react";
import '../../Style/index.css';
import { Animated } from "react-animated-css";
import {Link} from "react-router-dom"
class StartPage extends React.Component {

    render() {
        return (
            <div>
                <div className={'header'}>
                    <Animated animationIn="fadeInRight" isVisible={true}>
                        <div className={'header-text'}>
                            <span>REACT LEARN LIVE</span>
                            <p>The best website to training ReactJS<br />
                                <i>A product for UET Campathon 2017</i>
                            </p>
                        </div>
                    </Animated>
                    <Animated animationIn="fadeInUp" isVisible={true}>
                        <Link  to = '/doc' className={'start-button'}>BẮT ĐẦU</Link>
                    </Animated>
                </div>

                <ul className={'list-learn'}>
                    <li><span className={'number-list'}>1</span> Bắt đầu với JSX</li>
                    <li><span className={'number-list'}>2</span> Class và Component</li>
                    <li><span className={'number-list'}>3</span> Props và State</li>
                    <li><span className={'number-list'}>4</span> Vòng đời trong ReactJS</li>
                    <li><span className={'number-list'}>5</span> Đón bắt sự kiện</li>
                    <li><span className={'number-list'}>6</span> Xử lí mảng với map()</li>
                    <li><span className={'number-list'}>7</span> React route</li>
                    <li><span className={'number-list'}>8</span> Modal popup</li>
                    <li><span className={'number-list'}>9</span> Hoạt cảnh bằng thư viện</li>
                    <li><span className={'number-list'}>10</span> Hoạt động service</li>
                </ul>

            </div>
        );
    }
}
export default StartPage;