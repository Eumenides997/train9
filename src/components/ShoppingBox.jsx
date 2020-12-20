import React from 'react';
import { Button, List } from 'antd';
import { connect } from 'dva';
import { PlusCircleOutlined, MinusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons';

@connect(({ shoppingBox }) => ({
    boxData: shoppingBox.boxData
}))

class ShoppingBox extends React.Component {
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
                                <Button icon={<PlusCircleOutlined />} style={{ border: 'none' }} />
                                <Button icon={<MinusCircleOutlined />} style={{ border: 'none' }} />
                            </Button.Group>,
                            <Button icon={<CloseCircleOutlined />} style={{ border: 'none' }} />
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