// app.js
App({  
  globalData: {  
    user01:0,
    user02:0,
    user03:0,
    musicPlayer: null, // 音乐播放器对象  
  },  
  // 启动时初始化音乐播放器  
  onLaunch: function () {  
    this.initMusicPlayer();  
  },  
  // 初始化音乐播放器  
  initMusicPlayer: function () {  
    const musicPlayer = wx.createInnerAudioContext();  
    this.globalData.musicPlayer = musicPlayer;  
    // 设置音乐播放器的参数  
    musicPlayer.src = "../../components/music/zymk.mp3";  // 音乐文件地址  
    musicPlayer.title = '背景音乐'; // 音乐文件标题  
    musicPlayer.loop = true; // 循环播放  
    musicPlayer.autoplay = true; // 自动播放  
    // 监听音乐播放结束事件  
    musicPlayer.onEnd(function () {  
      this.playMusic();  
    });  
  },  
  // 播放音乐  
  playMusic: function () {  
    const musicPlayer = this.globalData.musicPlayer;  
    musicPlayer && musicPlayer.play();  
  },  
})