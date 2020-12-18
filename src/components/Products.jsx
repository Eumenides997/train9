import React from 'react';
import { Card, Button, Popover, List, Row, Col } from 'antd';
import { connect } from 'dva';

@connect(({ products }) => ({
    productsData: products.productsData
}))

class Products extends React.Component {
    constructor() {
        super()
    }
    async componentWillMount() {
        const { dispatch } = this.props
        await dispatch({
            type: 'products/GetData'
        })
    }
    render() {
        const { productsData } = this.props
        const GoodsList = (productsData || []).map((item, key) => (
            <Col xs={24} sm={12} md={8} lg={6} style={{ margin: '0 auto' }} key={key}>
                <Card style={{ width: '90%', margin: '0 auto', marginTop: 20, textAlign: "center" }}>
                    <img src={`./img/${item.sku}_1.jpg`} style={{ width: '100%' }} />
                    <h3 style={{ fontSize: 10 }}>{item.title}</h3>
                    <hr />
                    <h3 style={{ fontSize: 15 }}>{item.currencyFormat + item.price}</h3>
                    <Popover
                        content={
                            <List
                                size="small"
                                dataSource={item.availableSizes}
                                renderItem={size => <List.Item><Button block>{size}</Button></List.Item>}
                            />
                        }
                        title="请选择需要的尺码"
                        trigger="click">
                        <Button style={{ backgroundColor: 'black', color: "#fff", fontSize: 10 }} size="large" block>添加到购物车</Button>
                    </Popover>
                </Card>
            </Col>
        ))
        const Goods = []
        for (let index = 0; index < 10; index++) {
            Goods.push(
                <Col xs={24} sm={12} md={8} lg={6} style={{ margin: '0 auto' }} key={index}>
                    <Card style={{ width: '80%', margin: '0 auto', marginTop: 20, textAlign: "center", padding: '10px' }}>
                        <img src={`../src/assets/yay.jpg`} style={{ width: '100%' }} />
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
                <Row>{GoodsList}</Row>
            </div >
        )
    }
}
export default Products