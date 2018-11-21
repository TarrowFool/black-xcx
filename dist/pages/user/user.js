'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var tags_itme = '\n  border: 1px solid #f1f2f3;\n  border-radius: 3px;\n  text-align: center;\n  line-height: 25px;\n  font-size:12px;\n';
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    STATUS_BAR_HEIGHT: wx.STATUS_BAR_HEIGHT,
    url: 'https://wx.qlogo.cn/mmopen/vi_32/8IwVR1skSnqYas88FloN5DWoPDp3u8aAxpjyxZVOsmxsAnrg2KfLia4JsaNXYFeZttx4crZy83OUc9twl8oScpw/132',
    items: [],
    alpha: 0,
    className: '',
    starList: [{
      text: '正能量',
      tagStyle: tags_itme
    }, {
      text: '宅男',
      tagStyle: tags_itme
    }, {
      text: '萝莉控',
      tagStyle: tags_itme
    }, {
      text: '中央空调',
      tagStyle: tags_itme
    }]
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },

  onReady: function onReady() {
    var arr = [];
    for (var i = 1; i <= 5; i++) {
      arr.push('\u5217\u8868\u9879\u76EE' + i);
    }
    this.setData({
      items: arr
    });
    console.log(this.data.items);
  }

});