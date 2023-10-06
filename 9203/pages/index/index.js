// index.js
var app = getApp();
Page({
  data: {  
  },   
  onLoad: function () {  
    const musicPlayer = getApp().globalData.musicPlayer;  
    this.playMusic(musicPlayer);  
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
  go1:function(){
    wx.navigateTo({
      url: '/pages/third/third',
    })
  },
  go2:function(){
    wx.navigateTo({
      url: '/pages/second/second',
    })
  },
})
