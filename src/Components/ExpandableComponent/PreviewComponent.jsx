import React, {Component} from 'react';
import './Preview.css';


class PreviewComponent extends Component{
    state = {
        open:false,
    }
    
    openPreview = () => {
        const {datas} = this.props;

        console.log(datas)
    }
    
    render(){
        if (this.props.open){
            return(
                <div className='Preview'>

                </div>
            );
        } else {
            // console.log('non¿')
            return null
        }
    }
}

export default PreviewComponent;