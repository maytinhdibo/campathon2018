import React from "react";
import CodeMirror from 'react-codemirror';
import '../../Style/Learn.css';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/material.css');

class LearnPage extends React.Component {
    state = {
        console: ["Terminal was starting...."],
        input: ""
    }
    render() {
        const console = this.state.console.map((text) =>
            <p>{text}</p>
        );
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
                        <iframe src="/test" />
                    </div>
<iframe src="/console.html">
    </iframe>
                    
                </div>
            </div>
        )
    }
}
export default LearnPage;