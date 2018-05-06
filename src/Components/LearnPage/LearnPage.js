import React from "react";
import { UnControlled as CodeMirror } from 'react-codemirror2'
import '../../Style/Learn.css';
import Header from "./../Header";
import NavBar from "../Navbar";
require('codemirror/lib/codemirror.css');
require('codemirror/mode/javascript/javascript');
require('codemirror/theme/material.css');

class LearnPage extends React.Component {
    state = {
        console: ["Terminal was starting...."],
        input: "",
        code: 'Loading...',
        codeContent: '',
    }
    fech = () => {
        const self = this;
        const id = self.props.match.params.id;
        console.log(id);
        fetch('http://localhost:8080/output?file=' + id + '/code.js&read=false')
            .then(function (response) {
                response.text().then(function (text) {
                    self.state.code = text;
                    self.setState({
                        code: self.state.code
                    });
                });
            });


        fetch('http://localhost:8080/output?file=' + id + '/guild.html&&read=true')
            .then(function (response) {
                response.text().then(function (text) {
                    console.log(self.state.guild);
                    document.getElementById('guild').innerHTML = text;
                });
            });


        document.getElementsByClassName('nav')[0].style.left = '-1000px';
    }
    componentDidMount() {
        this.fech();
    }
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            this.fech();
        }
    }
    download = () => {
        var text = this.state.codeContent,
            blob = new Blob([text], { type: 'text/plain' }),
            anchor = document.createElement('a');
        anchor.download = "download.js";
        anchor.href = (window.webkitURL || window.URL).createObjectURL(blob);
        anchor.dataset.downloadurl = ['text/plain', anchor.download, anchor.href].join(':');
        anchor.click();
    }
    run = () => {
        const request = new Request("http://localhost:8080/input", {
            method: "POST",
            headers: {
                'Content-Type': ' application/json'
            },
            body: JSON.stringify({
                file: "Components/Test/TestApp.js",
                text: this.state.codeContent
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
                <Header />
                <NavBar data={this.props.data} />
                <div id="toolkit">
                    <button onClick={this.download}>Lưu file</button>
                    <button onClick={this.download}>Tải lại</button>
                    <button onClick={this.run}>Chạy ngay »</button>
                    <button id="nextButton">Bài tiếp</button>
                </div>
                <div className="main-learn">
                        <div id='guild'/>
                        <div id="code">
                        <CodeMirror value={this.state.code} options={{
                            mode: 'javascript',
                            lineNumbers: true,
                            theme: 'material'
                        }} onChange={(editor, data, value) => {
                            this.setState({ codeContent: value });
                        }} />
                    </div>

                    <div id="frame">
                        <iframe src="http://localhost:3001/" />
                    </div>
                    <iframe id="console" src="/console.html">
                    </iframe>

                </div>
            </div>
        )
    }
}
export default LearnPage;