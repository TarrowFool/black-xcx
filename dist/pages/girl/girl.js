'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = require('../../static/utils/system.js');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A_gank = _system2.default.A_gank;
exports.default = Page({
  data: {
    grils: [],
    hidden: false,
    loading: false,
    plain: false
  },
  onLoad: function onLoad() {
    console.log('onLoad');
    var that = this;
    requestData(that, mCurrentPage + 1);
  },
  onReachBottom: function onReachBottom() {
    console.log('onLoad');
    var that = this;
    that.setData({
      hidden: false
    });
    requestData(that, mCurrentPage + 1);
  }
});


var mUrl = [];
var mDesc = [];
var mWho = [];
var mTimes = [];
var mTitles = [];

var mCurrentPage = 0;
function requestData(that, targetPage) {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  });
  wx.request({
    url: A_gank + "data/福利/10/" + targetPage,
    header: {
      "Content-Type": "application/json"
    },
    success: function success(res) {
      console.log(res);
      if (res == null || res.data == null || res.data.results == null || res.data.results.length <= 0) {

        console.error("god bless you...");
        return;
      }

      for (var i = 0; i < res.data.results.length; i++) {
        bindData(res.data.results[i]);
      } //将获得的各种数据写入itemList，用于setData
      var itemList = [];
      for (var i = 0; i < mUrl.length; i++) {
        itemList.push({ url: mUrl[i], desc: mDesc[i], who: mWho[i], time: mTimes[i], title: mTitles[i] });
      }that.setData({
        grils: itemList,
        hidden: true
        // loadmorehidden:false,
      });

      mCurrentPage = targetPage;

      wx.hideToast();
    }
  });
}

/**
 * 绑定接口中返回的数据
 * @param itemData Gank.io返回的content;
 */
function bindData(itemData) {

  var url = itemData.url.replace("//ww", "//ws");
  var desc = itemData.desc;
  var who = itemData.who;
  var times = itemData.publishedAt.split("T")[0];

  mUrl.push(url);
  mDesc.push(desc);
  mWho.push(who);
  mTimes.push(times);
  mTitles.push("publish by：" + "@" + who + " —— " + times);
}