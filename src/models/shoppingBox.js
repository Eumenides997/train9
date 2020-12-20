
export default {
    namespace: "shoppingBox",
    state: {
        boxData: [],
        count: 0,
        amount: 0
    },
    effects: {
        *boxAdd({ payload: { data, size } }, { put }) {
            // console.log(data.title + "-2-" + size)
            yield put({
                type: 'boxData',
                payload: {
                    data,
                    size
                }
            })
        }

    },
    reducers: {
        boxData(state, payload) {
            const { boxData } = state
            const { data, size } = payload.payload
            // console.log(data.title + "-3-" + size)
            // redux 更新了state后，组件没有更新，没有重新渲染的问题原因是 state是引用，直接修改state的时候store内部的state同样也就变了，redux认为dispatch前后的state没有改变，就不会render，所以如果要取这整个对象进行一些修改，可以使用Object.assign或者直接简单粗暴地拷贝一份
            let myDate = JSON.parse(JSON.stringify(data))
            boxData.push({
                ...myDate,
                size: size,
                number: 1
            })
            let count = 0
            boxData.forEach(element => {
                count++
            });
            let myBoxData = JSON.parse(JSON.stringify(boxData))
            console.log(myBoxData, "-4-boxData")
            return {
                boxData: myBoxData,
                count
            }
        }
    }

}