import React from 'react';
import { Button, List } from 'antd';

class ShoppingBox extends React.Component {
    render() {
        const Goods = []
        for (let index = 0; index < 10; index++) {
            Goods.push(
                <List.Item key={index}
                    actions={[
                        <Button.Group size="small">
                            <Button > - </Button>
                            <Button> + </Button>
                        </Button.Group>,
                        <Button  >X</Button>
                    ]}>
                    <List.Item.Meta
                        avatar={<img src={`./img/yay.jpg`} alt="1" style={{ width: 50 }} />}
                        title={index}
                        description={index + " | " + index} />
                    <div>x {index}</div>
                </List.Item>
            )
        }
        return (
            <div>
                {Goods}
            </div>
        )
    }
}
export default ShoppingBox