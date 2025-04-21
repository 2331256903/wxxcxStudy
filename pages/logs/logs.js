// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    // 导航传递过来的对象
    query: {}
  },
  /** 
   * 使用编程式导航返回上一级
   * */ 
  goBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  onLoad(options) {
    this.setData({
      query: options
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
