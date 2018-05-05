import React from "react";
import CodeMirror from 'react-codemirror';
import '../../Style/Learn.css';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/material.css');

class LearnPage extends React.Component {
    render() {
        return (
            <div>
                <div id="toolkit">
                <button>Lưu file</button>
                <button>Chạy ngay »</button>
                </div>
            <div className="main-learn">
                <div id="code">
                    <CodeMirror options={{
                        mode: 'javascript',
                        lineNumbers: true,
                        theme: 'material'
                    }} />
                </div>

                <div id="frame">
                <iframe src="http://www.december.com/html/tutor/hello.html"/>
                </div>
                    <div id="console">
                    Terminal was starting....
                    </div>
            </div>
            </div>
        )
    }
}
export default LearnPage;