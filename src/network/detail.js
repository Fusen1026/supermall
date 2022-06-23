import {request} from './request'

export function getDetail(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}

export function getRecommend() {
  return request({
    url: "/recommend"
  })
}

export class DetailGoods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title
        this.price = itemInfo.price
        this.desc = itemInfo.desc
        this.oldPrice = itemInfo.oldPrice
        this.discountDesc = itemInfo.discountDesc
        this.lowNowPrice = itemInfo.lowNowPrice
        this.columns = columns
        this.services = shopInfo.services
    }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}

export class GoodsInfo {
    constructor(detailInfo) {
        this.desc = detailInfo.desc
        this.detailImage = detailInfo.detailImage
    }
}

export class Params {
  constructor(info, rule) {
    this.info = info.set
    this.rule = rule.tables[0]
  }
}
