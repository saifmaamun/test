import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image } from 'react-konva';

const Logo = () => {
    const [stat, setStat] = useState({
        image: null,
        x: 50,
        y:50
    });
    const componentDidMount=()=> {
        this.loadImage();
    }
    const componentDidUpdate=(oldProps)=>{
        if (oldProps.src !== this.props.src) {
            this.loadImage();
        }
    }
    const componentWillUnmount=()=>{
        this.image.removeEventListener('load', this.handleLoad);
    }
    const loadImage=()=>{
        // save to "this" to remove "load" handler on unmount
        this.image = new window.Image();
        this.image.src = this.props.src;
        this.image.addEventListener('load', this.handleLoad);
    }
    const handleLoad = () => {
        // after setState react-konva will update canvas and redraw the layer
        // because "image" property is changed
        this.setstat({
            image: this.image,
        });
        // if you keep same image object during source updates
        // you will have to update layer manually:
        // this.imageNode.getLayer().batchDraw();
    };
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Layer>
        <Image
            x={stat.x}
            y={stat.y}
            draggable
            image={stat.image}/>
            </Layer>
        </Stage>
    );
};

export default Logo;