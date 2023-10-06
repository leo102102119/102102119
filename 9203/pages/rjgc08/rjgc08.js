// pages/rjgc08/rjgc08.js
var app = getApp();
Page({
  data: {  
    user03:100,
    acm:0,
  },  
  go1:function(){
    wx.navigateTo({
      url: '/pages/rjgc05/rjgc05',
    })
  },
  stopMusic: function () {  
    const musicPlayer = getApp().globalData.musicPlayer;  
    if (musicPlayer) {  
      musicPlayer.stop();  
    }  
  },  
  playMusic: function (musicPlayer) {  
    if (musicPlayer) {  
      musicPlayer.play();  
    }  
  },  
  onLoad: function () {  
    var app = getApp();  
    this.setData({  
      user03: app.globalData.user03,
    });  
    var v1=app.globalData.user03;
    const acm = parseInt(v1);
    this.setData({ acm });
    const musicPlayer = getApp().globalData.musicPlayer;  
    this.playMusic(musicPlayer);  
  }
})