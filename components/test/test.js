// components/test/test.js
Component({
  options: {
    styleIsolation: "shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    n1: 0,
    n2: 0,
    sum: 0
  },

  /**
   * 组件的方法列表
   *  包含事件处理函数, 和自定义方法
   *  为了进行区分, 自定义方法建议以_开头
   */
  methods: {
    addCount() {
      if (this.data.count >= this.properties.max) return
      this.setData({count: this.data.count + 1})
      this._showCount() // 通过this直接调用自定义方法
      console.log(this.data === this.properties)
    },
    _showCount() { // 自定义方法建议以"_"开头
      wx.showToast({
        title: 'count值为: ' + this.data.count,
        icon: 'none'
      })
    },
    addN1() {
      this.setData({
        n1: this.data.n1 + 1
      })
    },
    addN2() {
      this.setData({
        n2: this.data.n2 + 1
      })
    }
  },

  observers: {
    'n1, n2': function(newN1, newN2) {
      this.setData({ sum: newN1 + newN2 })
    }
  }
})