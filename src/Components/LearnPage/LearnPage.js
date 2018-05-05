import React from "react";
import {UnControlled as CodeMirror} from 'react-codemirror2'
import '../../Style/Learn.css';
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/material.css');

class LearnPage extends React.Component {
    state = {
        console: ["Terminal was starting...."],
        input: "",
        code: 'Loading...'
    }
    componentDidMount() {
        const self = this;
        fetch('http://localhost:8080/output?file=1/code.js')
            .then(function (response) {
                response.text().then(function (text) {
                    self.state.code = text;
                    self.setState(self.state);
                });
            })
    }
    run=()=>{
        alert(this.state.code);
        const request = new Request("http://localhost:8080/input", {
			method: "POST",
			headers: {
				'Content-Type': ' application/json'
			},
			body: JSON.stringify({
				file: "Components/Test/TestApp.js",
				text: this.state.code
			})
		});
		return fetch(request)
			.then(response => {
				console.log(response);
			});
    }
    render() {
        return (
            <div>
                <div id="toolkit">
                    <button>Lưu file</button>
                    <button onClick={this.run}>Chạy ngay »</button>
                </div>
                <div className="main-learn">
                    <div id="code">
                        <CodeMirror value={this.state.code} options={{
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