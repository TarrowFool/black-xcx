"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + 'px',
    contentshow: 0,
    items0: [],
    items1: [],
    setShow: false
  },
  navigateBack: function navigateBack() {
    wx.navigateBack();
  },
  changTab: function changTab(e) {
    var index = e.detail.index;
    this.setData({
      contentshow: index
    });
  }
});