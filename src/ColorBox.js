import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import "./ColorBox.css";

export default class ColorBox extends Component {
    render() {
        // this.propsを省略
        const {name, color} = this.props;
        return (
            <CopyToClipboard text={color}>
                <div style={{ background: color }} className="ColorBox">
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