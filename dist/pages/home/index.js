'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _system = require('../../static/utils/system.js');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Page({
  data: {
    isShow: false,
    current1: 0,
    banner: [{
      src: 'https://blackkong.cn/public/uploads/20181112/2a578103700f787333563b9316761f65.jpeg'
    }, {
      src: 'https://blackkong.cn/public/uploads/20181112/2a578103700f787333563b9316761f65.jpeg'
    }, {
      src: 'https://blackkong.cn/public/uploads/20181112/2a578103700f787333563b9316761f65.jpeg'
    }],
    swiperCurrent: 0

  },
  swiperChange: function swiperChange(e) {
    var bac = e.detail.current;
    this.setData({
      swiperCurrent: bac
    });
  },
  starShow: function starShow() {
    this.setData({
      isShow: true
    });
  },
  handleContentChange1: function handleContentChange1(e) {
    var current = e.detail.current;
    this.setData({
      current1: current
    });
  },
  handleChange1: function handleChange1(e) {
    var index = e.detail.index;
    this.setData({
      current1: index
    });
  },
  navto: function navto(e) {
    var url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
  }
});