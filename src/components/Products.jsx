import React from 'react';
import { Card, Button, Popover, List, Row, Col } from 'antd';

class Products extends React.Component {
    render() {
        const Goods = []
        for (let index = 0; index < 10; index++) {
            Goods.push(
                <Col xs={24} sm={12} md={8} lg={6} style={{ margin: '0 auto' }}>
                    <Card style={{ width: '80%', margin: '0 auto', marginTop: 20, textAlign: "center", padding: '10px' }}>
                        <img src={`./img/yay.jpg`} style={{ width: '100%' }} />
                        <h3>xxxx</h3>
                        <hr />
                        <h3>$14</h3>
                        <Popover
                            content={
                                <List
                                    size="small"
                                    renderItem={size => <List.Item><Button block>{size}</Button></List.Item>}
                                />
                            }
                            title="请选择需要的尺码"
                            trigger="click">
                            <Button style={{ backgroundColor: 'black', color: "#fff" }} size="large" block>添加到购物车</Button>
                        </Popover>  
                    </Card>
                </Col>
            )
        }
        return (
            <div>
                <Row>{Goods}</Row>
            </div >
        )
    }
}
export default Products