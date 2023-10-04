// pages/third/third.js
Page({
  go1:function(){
    wx.navigateTo({
      url: '/pages/rjgc01/rjgc01',
    })
  },
  go2:function(){
    wx.navigateTo({
      url: '/pages/rjgc03/rjgc03',
    })
  },
  global : {
      timer : null ,
      isRand : false
  },
  data: {
    dice : ['first','second','third','fourth','fifth','sixth'],
    buttonType : 'default',
    buttonValue : '摇一摇',
    num : 0
  },
  shake : function () { 
    let me = this;
    this.global.isRand = !this.global.isRand;
    if ( this.global.isRand ) {
      this.global.timer = setInterval(function (){
        let num = Math.floor(Math.random()*6);
        me.setData({num : num});
      },50);
    } else {
      clearInterval(this.global.timer);
    }
    this.setData({
      dice: this.data.dice, 
      buttonType : (this.global.isRand) ? 'default' : 'default',
      buttonValue : (this.global.isRand) ? '点击停止' : '摇一摇',
    });
  },
})
