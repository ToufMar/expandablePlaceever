import React, {useState, useImperativeHandle} from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Home from '@material-ui/icons/Home';
import Map from '@material-ui/icons/Map';
import Person from '@material-ui/icons/Person';
import Search from '@material-ui/icons/Search';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
const Footer = (props) => {
    const [value, setValue] = useState('');
    const {classes} = props;

    const handleChange = (e, value) => {
        setValue({value})
    }
    
    console.log(value)
    return  (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction className={classes.label} value='accueil' label='accueil' icon={<Home className={classes.icon}/>}></BottomNavigationAction>
            <BottomNavigationAction className={classes.label} value='carte' label='carte' icon={<Map className={classes.icon}/>}></BottomNavigationAction>
            <BottomNavigationAction className={classes.label} value='camera' label='camera' icon={<PhotoCamera className={classes.icon}/>}></BottomNavigationAction>
            <BottomNavigationAction className={classes.label} value='profile' label='profile' icon={<Person className={classes.icon}/>}></BottomNavigationAction>
            <BottomNavigationAction className={classes.label} value='recherche' label='recherche' icon={<Search className={classes.icon}/>}></BottomNavigationAction>
        </BottomNavigation>
    )
}

const styles = {
    root: {
        width: '100%',
        backgroundColor: '#f58f45',
        position: 'fixed',
        height: '10%',
        bottom: 0,
        borderTop: '1px solid white'
    },
    icon: {
        color: 'white',
        height: '40%',
        width: '40%'
    },
    label: {
        color: 'white'
    }
}

export default withStyles(styles)(Footer);