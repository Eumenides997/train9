import ShopData from '../services/ShopData'

export default {
    namespace: 'products',
    state: {
        productsData: [],
    },
    effects: {
        *GetData({ paylaod }, { put, call }) {
            const res = yield call(ShopData.getProducts)
            console.log(res)
            if (res) {
                yield put({
                    type: 'setProductsData',
                    data: res.data.products
                })
            } else {
                alert("API Wrong!")
            }
        }
    },
    reducers: {
        setProductsData(state, paylaod) {
            return {
                ...state,
                productsData: paylaod.data
            }
        },
        setData(state, payload) {
            return {
                ...state,
                productsData: payload.data
            }
        }
    }

}