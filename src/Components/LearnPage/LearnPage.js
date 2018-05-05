import React from "react";

class LearnPage extends React.Component{
    render(){
        return(
            <div>
                <div >
                    <ul className={'learn-time-line'}>
                        <li className={'lesson'}>
                            Bài 1:
                            <span className={'doc'}>Học:</span>
                            <span className={'code-live'}>Thực hành:</span>
                            <p className={'doc-text'}></p>
                        </li>
                    </ul>
                </div>
                <div className={'code'}>
                    <span className={'run-code'}>Chạy thử nào!</span>
                </div>
                <div className={'build-code'}></div>
            </div>
        )
    }
}
export  default LearnPage;