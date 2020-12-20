import React from 'react';
import { connect } from 'dva';
import Screen from '../components/Screen'
import 'antd/dist/antd.css'
import Products from '../components/Products'
import { Layout, Drawer, Button, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import ShoppingBox from '../components/ShoppingBox'

@connect(({ shoppingBox }) => ({
  count: shoppingBox.count
}))

class IndexPage extends React.Component {
  state = {
    current: 'mail'
  }
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  openDrawer = () => {
    this.setState({
      visible: true
    })
  }
  closeDrawer = () => {
    this.setState({
      visible: false
    })
  }
  render() {
    const { Header, Content } = Layout;
    const { count } = this.props

    return (
      <div>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Screen />
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64, textAlign: "center", backgroundColor: 'black' }}>
            <Products />
          </Content>
        </Layout>
        <div style={{ position: 'fixed', zIndex: 2, top: 16, left: "80%" }} >
          <Badge count={count} showZero>
            <Button icon={<ShoppingCartOutlined />} style={{ fontSize: "16px" }} onClick={this.openDrawer}>
              购物车
            </Button>
          </Badge>
        </div>
        <Drawer
          title="购物车物品"
          width="500"
          placement="right"
          onClose={this.closeDrawer}
          visible={this.state.visible}>
          <ShoppingBox />
        </Drawer>
      </div>
    )
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
