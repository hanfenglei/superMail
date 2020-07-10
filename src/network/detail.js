import axios from './axios';

export function getDetail(iid) {
  return axios({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return axios({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.newPrice;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discount;
    this.nowPrice = itemInfo.highNowPrice;
    this.columns = columns;
    this.services = services;
  }
}

export class GoodsParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSell;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}