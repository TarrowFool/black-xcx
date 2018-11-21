'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var amapFile = require('../../libs/amap-wx.js');
exports.default = Page({
  data: {
    biaoji: "../../resource/img/place.png",
    longitude: "113.324520",
    latitude: "23.099994",
    markers: [],
    controls: [{
      id: 0,
      iconPath: '/resource/img/dingwei.png',
      position: {
        left: 10,
        top: 400,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  onLoad: function onLoad() {
    wx.getLocation({
      type: 'gcj02',
      success: function success(res) {
        var latitude = parseFloat(res.latitude);
        var longitude = parseFloat(res.longitude);
        that.setData({
          latitude: latitude,
          longitude: longitude
        });
      }
    });

    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: '7d81c77cc2bb090a22a6ddab7ee8a590' });
    myAmapFun.getPoiAround({
      success: function success(data) {
        //成功回调
        console.log(data);
        var markes = [];
        if (data.markers) {
          for (var i = 0; i < data.markers.length; i++) {
            markes[i] = new Object();

            markes[i].latitude = data.markers[i].latitude;
            markes[i].longitude = data.markers[i].longitude;
            markes[i].width = 25;
            markes[i].height = 25;
            markes[i].iconPath = that.data.biaoji;
            markes[i].callout = {
              display: "BYCLICK",
              borderRadius: 2,
              content: data.markers[i].name,
              textAlign: "center",
              bgColor: "#36c9a3",
              padding: 5,
              color: "#fff"
            };
          }
          that.setData({
            markers: markes
          });

          console.log(that.data.markers);
        }
      },
      fail: function fail(info) {
        //失败回调
        console.log(info);
      }
    });
  },

  location: function location() {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function success(res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name: "当前位置"
        });
      }
    });
  },
  translateMarker: function translateMarker(e) {
    var that = this;
    this.mapCtx.moveToLocation();
  },
  onReady: function onReady() {
    this.mapCtx = wx.createMapContext('map');
  }
});