import React, { Component, Fragment } from 'react';
import './compnent.css';
import PreviewComponent from './PreviewComponent.jsx';
import { relative } from 'path';

// let onlongtouch;
let timer, lockTimer;
let touchDuration = 600;

class ExpandableComponent extends Component {

    state = {
        dragging: false,
        transition: null,

        timer: 0,
        start: false,
        interval: 0,
        openPreview: false,
    }

    getOffset(el) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left + window.scrollX,
            top: rect.top + window.scrollY,
            right: rect.right
        };
    }

    dragging = (e) => {
        const {left, top, right} = this.getOffset(e.target)
        // e.target.style.backgroundColor = 'black';
        // e.target.style.height = '40px'
        // // e.target.style.position = 'relative';
        let fingerX = e.targetTouches[0].pageX;
        let fingerY = e.targetTouches[0].pageY;
        console.log(this.state.dragging )
        if (this.state.dragging) {
            e.target.style.width = e.targetTouches[0].pageX + 200 + 'px';
            // e.target.style.height = e.targetTouches[0].pageY + 200 + 'px';
            // console.log(right,  window.innerWidth - (window.innerWidth / 6))
            if (right > (window.innerWidth - (window.innerWidth / 6))){
                this.setState({openPreview: true})
            } else {
                this.setState({openPreview: false})

            }
        }
    }
    
    pointerOut = (e) => {
        e.target.style.width = '47vw';
        e.target.style.height = '30vh';
        e.target.style.zIndez = '0'
    this.setState({
            openPreview: false,
            dragging: false,
            transition: true
        })
    }

    onlongtouch(e){
        window.navigator.vibrate(100)
        let fingerX = e.targetTouches[0].pageX;
        let fingerY = e.targetTouches[0].pageY;
        // console.log(fingerX, e.target.style.width)
        // if (fingerX <= e.target.style.width && fingerY <= e.target.style.height){
            this.setState({dragging: true})
        // )}
        // e.target.style.position = 'relative'
    }
    
    onTouchEnd = (e) => {
        if (timer){
            this.setState({
                openPreview: false,
                dragging: false,
                transition: true,
            })
            clearTimeout(timer);
            lockTimer = false;
        }
        e.target.style.width = '47vw';
        e.target.style.height = '30vh';
        this.setState({
            openPreview: false,
            dragging: false,
            transition: true,
        })
        
    }
    
    onTouchStart = (e) => {
        e.persist()
        timer = setTimeout(
            () => 
            this.onlongtouch(e)
            , touchDuration);
            lockTimer = true;
        }
    
    contextMenu = (e) => {
        e.preventDefault();
    }


    render() {
        return (
                <div style={{
                    transition: (this.state.transition) ? '0.3s ease-in-out' : null,
                }}
                    onTouchStart={this.onTouchStart}
                    onTouchEnd={this.onTouchEnd}
                    onTouchMove={this.dragging}
                    id='container'>
                <PreviewComponent
                    datas={this.state}
                    open={this.state.openPreview}
                />
                </div>
        )
    }
}

export default ExpandableComponent;