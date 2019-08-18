import React, { Component } from 'react'
import ColorBox from './ColorBox';
import "./Palette.css";


export default class Palette extends Component {
    
    render() {
        const ColorBoxes = this.props.palette.colors[500].map( color => {
            return <ColorBox color={color.hex} name={color.name}/>
        });

        return (
            <div className="Palette">
                {/* NavBar here */}
                <div className="Palette-colors">
                   {ColorBoxes}
                </div>
                {/* footer here */}
            </div>
        )
    }
}
