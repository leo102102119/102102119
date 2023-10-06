// pages/rjgc07/rjgc07.js
var app = getApp();
Page({
  go1:function(){
    wx.navigateTo({
      url: '/pages/rjgc08/rjgc08',
    })
  },
  data: {  
    v1:0,
    user03:100,
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
  limitWord1:function(e){
    var that = this;
    var value = e.detail.value;
    var v1=parseInt(value);
    this.setData({ v1 });
    app.globalData.user03=v1;
  },
  onLoad: function () {  
    var app = getApp();  
    this.setData({  
      user03: app.globalData.user03,
    });  
    const musicPlayer = getApp().globalData.musicPlayer;  
    this.playMusic(musicPlayer);  
  },  
})