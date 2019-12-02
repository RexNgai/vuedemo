const BASEURL = "http://rap2api.taobao.org/app/mock/234481/vuedemo/";
const LOCALURL = "http://localhost:3000/";
const URL = {
  getShoppingMallInfo: BASEURL + "index",
  getGoodsInfo: BASEURL + "getGoodsInfo",
  registerUser: LOCALURL + "user/register",
  login: LOCALURL + "user/login",
  getDetailGoodsInfo: LOCALURL + "goods/getDetailGoodsInfo", //得到商品详细数据
  getCategoryList: LOCALURL + "goods/getCategoryList", //得到大类信息
  getCategorySubList: LOCALURL + "goods/getCategorySubList", //得到小类消息
  getGoodsListByCategorySubID: LOCALURL + "goods/getGoodsListByCategorySubID"
};

module.exports = URL;
