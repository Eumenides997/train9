import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

class Screen extends React.Component {

    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a>所有尺寸</a>
                </Menu.Item>
                <Menu.Item>
                    <a>S</a>
                </Menu.Item>
                <Menu.Item>
                    <a>M</a>
                </Menu.Item>
                <Menu.Item>
                    <a>L</a>
                </Menu.Item>
                <Menu.Item>
                    <a>XL</a>
                </Menu.Item>
                <Menu.Item>
                    <a>XXL</a>
                </Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu>
                <Menu.Item>
                    <a>综合排序</a>
                </Menu.Item>
                <Menu.Item>
                    <a>价格升序</a>
                </Menu.Item>
                <Menu.Item>
                    <a>价格降序</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <div>
                <Dropdown overlay={menu}>
                    <a>尺寸选择</a>
                </Dropdown>
                &nbsp
                <Dropdown overlay={menu2}>
                    <a>价格排序</a>
                </Dropdown>
            </div>
        )
    }
}
export default Screen;