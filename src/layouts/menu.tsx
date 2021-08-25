import React from "react";
import { Menu } from 'antd';


const MenuComponent = (): JSX.Element => {

    const menuElements = [
        {name: "first", id:1},
        {name: "second", id:2},
        {name: "third", id:3},
    ]

    return (
            <Menu
                mode="inline"
                style={{ height: '100%' }}
              >
              
                {menuElements.map(i=><Menu.Item key={i.name}>{i.name}</Menu.Item>)}
              
            </Menu>
    )
}

export default MenuComponent;