import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		cartList: []
	},
	mutations: {
		addCartCount(state, payLoad) {
			// console.log("addCartCount")
			payLoad.count++
		},
		addCartList(state, payLoad) {
      payLoad.checked = true
			state.cartList.push(payLoad)
		}
	},
	actions: {
		addCartList(context, payLoad) {
			return new Promise((resolve, reject) => {
        let oldProduct = null
        for(let item of context.state.cartList) {
          if(item.iid == payLoad.iid) {
            oldProduct = item
          }
        }

        if(oldProduct) {
          // 应用了引用类型数据的特点
          // oldProduct.count + 1

          context.commit("addCartCount", oldProduct)
          resolve("当前的商品数量+1")
        }else {
          payLoad.count = 1
          context.commit("addCartList", payLoad)
          resolve("添加了新的商品")
        }
      })
		}
	}
})

export default store