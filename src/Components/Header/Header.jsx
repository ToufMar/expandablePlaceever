import React, {useReducer} from 'react';
import './Header.css'
import AppBar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core/styles';
const initialState = {
    open: true,
    actif: false, 
}

const reducer = (state, action) => {
    switch (action.type){
        case 'openLogo':
            return {
                ...state,
                open: true
            }
        case 'closeLogo':
            return {
                ...state,
                open: false
            }
        case 'activUser':
            return {
                ...state,
                actif: true
            }
        case 'inactivUser':
            return {
                ...state,
                actif: false
            }
        default: return state
    }
}


const Header = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {classes} = props;
    
    const checkIfActif = () => {
        
    }

    return (
        <AppBar className={classes.appBar}>
            <img className="logo" src={process.env.PUBLIC_URL + "/Logo/logoicone.png"} alt='logo' style={{height: '60%', width: '60%'}}></img>
        </AppBar>
    )

}

const style = {
    appBar:{
        marginTop: '-10%',
        zIndex: '1000',
        alignItems: 'center',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    }
}

export default withStyles(style)(Header);