// pages/rjgc05/rjgc05.js
var app = getApp();
Page({
  go1:function(){
    wx.navigateTo({
      url: '/pages/rjgc06/rjgc06',
    })
  },
  data: {  
    v1:0,
    v2:0,
    user01:100,
    user02:100,
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
    app.globalData.user01=v1;
  },
  limitWord2:function(e){
    var that = this;
    var value = e.detail.value;
    var v2=parseInt(value);
    this.setData({ v2 });
    app.globalData.user02=v2;
  },
  onLoad: function () {  
    var app = getApp();  
    this.setData({  
      user01: app.globalData.user01,
      user02: app.globalData.user02,
    });  
    const musicPlayer = getApp().globalData.musicPlayer;  
    this.playMusic(musicPlayer);  
  },  
})