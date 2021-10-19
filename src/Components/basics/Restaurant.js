import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navigation from './Navigation';

const uniqueList = [
        ...new Set(
            Menu.map((curEle)=>{
                return curEle.category;
            })
        ), 'All',
    ];


const Restaurant = () => {
    const[menuData, setmenuData] = useState(Menu);
    const[menuItem, setMenuItem] = useState(uniqueList);

    const filterItem = (category)=>{
        if(category === 'All'){
            setmenuData(Menu);
            return;
        }
        const updateList = Menu.filter((curEle)=>{
            return curEle.category === category;
        });
        setmenuData(updateList);
    };
    return (
        <div>
            < Navigation filterItem = {filterItem} menuItem={menuItem} />
            < MenuCard menuData = {menuData} />
        </div>
    )
}

export default Restaurant
