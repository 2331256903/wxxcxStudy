// index.js

Page({

  data: {
    /** 
     * 页面的初始数据
     * */
    info: 'hello world',
    imgSrc: 'http://www.itheima.com/images/logo.png',
    randomNum1: Math.random() * 10, // 生成10以内的随机数
    randomNum2: Math.random().toFixed(2),
    count: 0,
    msg: '你好, ',
    type: 1
  },
  innerHandler: function(e) {
    console.log(e, 'innerHandler')
  },
  outerHandler: function(e) {
    console.log(e, 'outerHandler')
  },
  countChange: function(e) {
    this.setData({
      count: this.data.count + 1
    })
    console.log(e, 'count值增加1')
  },
  btnHandler1(event) {
    // dataset是一个对象, 包含了所有通过data-*传递过来的参数项
    console.log(event.target.dataset)
    // 通过dataset可以访问到具体参数的值
    console.log(event.target.dataset.info)
  },

  // 输入框的事件处理函数
  inputHandler1(e) {
    // e.detail.value 获取到变化后文本框最新的值
    console.log(e.detail.value)
  },

  inputHandler2(e) {
    this.setData({
      // 通过e.datail.value获取文本框最新的值
      msg: e.detail.value
    })
  }

})
