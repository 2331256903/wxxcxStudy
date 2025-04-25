// components/test2/test2.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0, 0, 0',
    fillColor: '255, 255, 255'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR() {
      this.setData({
        '_rgb.r': this.data._rgb.r + 20 > 255 ? 255 : this.data._rgb.r + 20
      })
    },
    changeG() {
      this.setData({
        '_rgb.g': this.data._rgb.g + 20 > 255 ? 255 : this.data._rgb.g + 20
      })
    },
    changeB() {
      this.setData({
        '_rgb.b': this.data._rgb.b + 20 > 255 ? 255 : this.data._rgb.b + 20
      })
    }
  },
  observers: {
    '_rgb.r, _rgb.g, _rgb.b': function(newR, newG, newB) {
      this.setData({
        fullColor: `${newR}, ${newG}, ${newB}`,
        fillColor: [255-newR, 255-newG, 255-newB].join()
      })
      console.log(this.data.fillColor);
    }
  },
  options: {
    pureDataPattern: /^_/
  }
})