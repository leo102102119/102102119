// pages/second/second.js
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
  go:function(){
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
})