import React, { Component } from 'react'
import ColorBox from './ColorBox';
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider, { Range } from 'rc-slider';

export default class Palette extends Component {

    constructor(props){
        super(props);
        this.state = {level: 500};
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level })
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const ColorBoxes = colors[level].map( color => {
            return <ColorBox color={color.hex} name={color.name}/>
        });

        return (
            <div className="Palette">
                <div className="slider">
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900}
                        step={100}
                        onAfterChange={this.changeLevel}
                    />
                </div>
                
                {/* NavBar here */}
                <div className="Palette-colors">
                   {ColorBoxes}
                </div>
                {/* footer here */}
            </div>
        )
    }
}
