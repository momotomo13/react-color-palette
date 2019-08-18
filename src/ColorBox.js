import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./ColorBox.css";

export default class ColorBox extends Component {

    constructor(props){
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        // copyされたら1500msで表示、非表示の切り替え
        this.setState({copied: true}, () => {
            setTimeout(() => this.setState({ copied:false }), 1500);
        });
    }

    render() {
        // this.propsを省略
        const {name, color} = this.props;
        const {copied} = this.state;
        return (
            // textに設定されてるものをclipboardに設定
            <CopyToClipboard text={color} onCopy={this.changeCopyState}>
                <div style={{ background: color }} className="ColorBox">
                    <div 
                        style={{ background: color }} 
                        className={`copy-overlay ${copied && 'show'}`} 
                    />
                    <div className={`copy-msg ${copied && 'show'}`}>
                        <h1>Copied</h1>
                        <p>{color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{ name }</span>
                        </div>
                        <button className="copy-button">Copy</button>
                    </div>
                    <span className="see-more">MORE</span>
                </div>
            </CopyToClipboard>
        )
    }
}