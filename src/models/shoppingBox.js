
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
        },
        *getBoxData({},{ put }) {
            yield put({
                type: 'getBoxData'
            })
        }

    },
    reducers: {
        boxData(state, payload) {
            const { boxData } = state
            const { data, size } = payload.payload
            // console.log(data.title + "-3-" + size)
            let key = 0
            let count = 0
            let amount = 0
            boxData.forEach(item => {
                if (item.id === data.id && item.size === size) {
                    item.number += 1
                } else {
                    key++
                }
                count += item.number
            });
            if (boxData.length === key) {
                boxData.push({
                    ...data,
                    size: size,
                    number: 1
                })
                count += 1
            }
            boxData.forEach(item => {
                amount = amount + item.price * item.number
            })
            console.log(boxData, "-4-boxData")
            return {
                ...state,
                boxData,
                count,
                amount
            }
        },
        getBoxData(state) {
            const { boxData } = state
            return {
                boxData
            }
        }
    }

}