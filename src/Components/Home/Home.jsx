import React from 'react';
import ExpandableComponent from '../ExpandableComponent/ExpandableComponent.jsx';
import './Home.css'


const Home = (props) => {


    return (
        <div className='homeGrid'>
            <ul className='homeUl'>
                <ExpandableComponent/>
                <ExpandableComponent/>
            </ul>
            <ul className='homeUl'>
                <ExpandableComponent/>
                <ExpandableComponent/>
            </ul>
            <ul className='homeUl'>
                <ExpandableComponent/>
                <ExpandableComponent/>
            </ul>
        </div>
    )
}

export default Home;