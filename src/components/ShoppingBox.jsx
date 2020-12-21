import React from 'react';
import { Button, List } from 'antd';
import { connect } from 'dva';
import { PlusCircleOutlined, MinusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

@connect(({ shoppingBox }) => ({
    boxData: shoppingBox.boxData
}))

class ShoppingBox extends React.Component {
    boxDelete = async (data) => {
        const { dispatch } = this.props
        await dispatch({
            type: 'shoppingBox/boxDelete',
            payload: {
                data
            }
        })
    }
    boxChange = async (data, num) => {
        const { dispatch } = this.props
        await dispatch({
            type: 'shoppingBox/boxChange',
            payload: {
                data,
                num
            }
        })
    }
    render() {
        const { boxData } = this.props
        console.log('boxData:', boxData)
        const GoodList = (
            <List
                itemLayout="horizontal"
                dataSource={boxData}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Button.Group size="small">
                                <Button onClick={() => this.boxChange(item, 1)} icon={<PlusCircleOutlined />} style={{ border: 'none' }} />
                                <Button onClick={() => this.boxChange(item, -1)} icon={<MinusCircleOutlined />} style={{ border: 'none' }} />
                            </Button.Group>,
                            <Button onClick={() => this.boxDelete(item)} icon={<CloseCircleOutlined />} style={{ border: 'none' }} />
                        ]}
                    >
                        <List.Item.Meta
                            avatar={<img src={`./img/${item.sku}_2.jpg`} alt="1" style={{ width: 50 }} />}
                            title={item.title}
                            description={item.size + " | " + item.style}
                        />
                        <div>x {item.number}</div>
                    </List.Item>
                )}
            />)
        return (
            <div>
                {GoodList}
            </div>
        )
    }
}
export default ShoppingBox