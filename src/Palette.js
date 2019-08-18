import React, { Component } from 'react'
import ColorBox from './ColorBox';
import "./Palette.css";
import Navbar from './Navbar';


export default class Palette extends Component {

    constructor(props){
        super(props);
        this.state = {level: 500, format: "hex"};
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeFormat(val){
        this.setState({ format: val });
    }

    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state;
        const ColorBoxes = colors[level].map( color => {
            return <ColorBox color={color[format]} name={color.name}/>
        });

        return (
            <div className="Palette">
                <Navbar 
                    level={level} 
                    changeLevel={this.changeLevel}
                    handleChange={this.changeFormat}
                />
                <div className="Palette-colors">
                   {ColorBoxes}
                </div>
                {/* footer here */}
            </div>
        )
    }
}
