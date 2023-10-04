// pages/rjgc02/rjgc02.js
var app = getApp();
Page({
  data: {  
    currentDice: 0,
    selectedDice: 0,
    chipCount: 0,  
    currentRound: 0, 
    totalRounds: 0, 
    remainingRounds: 0, 
    c1:1000,
    c2:1000,
    b1:0,
    b2:0,
    pku:0,
    currentMultiplier:1,
    dice1:[1,1,1,1,1],
    dice01:[1,1,1,1,1],
    lockdice1:[0,0,0,0,0],
    lockdice01:[0,0,0,0,0],
    dice2:[1,1,1,1,1],
    dice02:[1,1,1,1,1],
    lockdice2:[0,0,0,0,0],
    lockdice02:[0,0,0,0,0],
    user01:100,
    user02:100,
    kexiao:0,
  },  
  onLoad: function () {  
    var app = getApp();  
    this.setData({  
      user01: app.globalData.user01,
      user02: app.globalData.user02,
    });  
    var v1=app.globalData.user01;
    var v2=app.globalData.user02;
    const totalRounds = parseInt(v1);
    const remainingRounds = parseInt(v1);
    const c1 = parseInt(v2);
    const c2 = parseInt(v2);
    this.setData({ c1 });
    this.setData({ c2 });
    this.setData({ remainingRounds });
    this.setData({ totalRounds });
  },  
  limitWord1:function(e){
    var that = this;
    var value = e.detail.value;
    const b1 = parseInt(value);
    this.setData({ b1 });
  },
  limitWord2:function(e){
    var that = this;
    var value = e.detail.value;
    const b2 = parseInt(value);
    this.setData({ b2 });
  },
  rollDice: function() {  
      let dice1=[0,0,0,0,0]
      let lockdice1=[0,0,0,0,0]
      let zymk1=[0,0,0,0,0,0]
      let score1 = 0;  
      let bignum1=0;
      let dice2=[0,0,0,0,0]
      let lockdice2=[0,0,0,0,0]
      let zymk2=[0,0,0,0,0,0]
      let score2 = 0;  
      let bignum2=0;
      let pku=0;
      let d1=0;
      let d2=0;
      let d3=0;
      let numrate=[0,0,0,0,0,0,0,0,0,0];
      d1=this.data.b1;
      d2=this.data.b2;
      this.setData({d1}); 
      this.setData({d2}); 
      for(let i=0;i<5;i++){
        d3=d1%10;
        d1=Math.floor(d1/10);
        numrate[d3]=numrate[d3]+1;
      }
      this.setData({d1}); 
      this.setData({d2}); 
      this.setData({numrate});
      if(this.data.remainingRounds<=0){
        if(this.data.c1>this.data.c2){
          wx.navigateTo({
            url: '/pages/huamian02/huamian02',
          })
        }
        else if(this.data.c1<this.data.c2){
          wx.navigateTo({
            url: '/pages/huamian03/huamian03',
          })
        }
        else{
          wx.navigateTo({
            url: '/pages/huamian01/huamian01',
          })
        }
      }
      else{
      if(this.data.c1*this.data.c2<=0){
        if(this.data.c1>this.data.c2){
          wx.navigateTo({
            url: '/pages/huamian02/huamian02',
          })
        }
        else if(this.data.c1<this.data.c2){
          wx.navigateTo({
            url: '/pages/huamian03/huamian03',
          })
        }
        else{
          wx.navigateTo({
            url: '/pages/huamian01/huamian01',
          })
        }
      }
      else{
      if(this.data.kexiao%3==0){
        for (let i = 0; i < 5; i++) {  
          lockdice1[i] = 0;
          this.data.lockdice01[i]=lockdice1[i];
        }   
        for (let i = 0; i < 5; i++) {  
          lockdice2[i] = 0;
          this.data.lockdice02[i]=lockdice2[i];
        }   
        this.setData({lockdice1}); 
        this.setData({lockdice2}); 
        const currentMultiplier=1;
        this.setData({currentMultiplier});
      }
      else{
        if(d2>=3){
          const currentMultiplier=this.data.currentMultiplier+3;
          this.setData({currentMultiplier});
        }
        else if(d2==2){
          const currentMultiplier=this.data.currentMultiplier+2;
          this.setData({currentMultiplier});
        }
        else if(d2==1){
          const currentMultiplier=this.data.currentMultiplier+1;
          this.setData({currentMultiplier});
        }
        else{
          const currentMultiplier=this.data.currentMultiplier;
          this.setData({currentMultiplier});
        }
        const currentMultiplier=this.data.currentMultiplier+ Math.floor(Math.random() * 4);
        this.setData({currentMultiplier});
        for (let i = 0; i < 5; i++) {  
          if(this.data.lockdice01[i]==1){
            lockdice1[i]=1;
          }
          else{
          if(numrate[i+1]>=1){
            lockdice1[i]=1;
          }
          else{
            lockdice1[i]=0;
          }
          //lockdice1[i] = Math.floor(Math.random() * 2);
          }
          this.data.lockdice01[i]=lockdice1[i];
        }   
        for (let i = 0; i < 5; i++) { 
          if(this.data.lockdice02[i]==1){
            lockdice2[i]=1;
          }
          else{ 
          lockdice2[i] = Math.floor(Math.random() * 2);
          this.data.lockdice02[i]=lockdice2[i];
          }
        }   
        this.setData({lockdice1}); 
        this.setData({lockdice2}); 
      }
      for (let i = 0; i < 5; i++) {  
        dice1[i] = this.data.dice01[i];
      }    
      for (let i = 0; i < 5; i++) {  
        dice2[i] = this.data.dice02[i];
      }    
      this.setData({dice1}); 
      this.setData({dice2}); 
      for (let i = 0; i < 5; i++) {  
        if(lockdice1[i]==0){
          dice1[i] = Math.floor(Math.random() * 6) + 1;
          this.data.dice01[i]=dice1[i];
        }
      }    
      for (let i = 0; i < 5; i++) {  
      score1 =score1+ dice1[i];  
      zymk1[dice1[i]-1]=zymk1[dice1[i]-1]+1;
    }   
    for(let i=0;i < 3; i++){
      if(zymk1[i]>=1 && zymk1[i+1]>=1 && zymk1[i+2]>=1 && zymk1[i+3]>=1){
        score1=score1+30;
      }
    }
    for(let i=0;i < 6;i++){
      if(zymk1[i]>=2){
        bignum1=bignum1+1;
      }
      if(zymk1[i]>=3){
        score1=score1+10;
      }
      if(zymk1[i]>=4){
        score1=score1+30;
      }
      if(zymk1[i]>=5){
        score1=score1+60;
      }
    }
    if(bignum1>=2){
      score1=score1+10;
    } 
    for (let i = 0; i < 5; i++) {  
      if(lockdice2[i]==0){
        dice2[i] = Math.floor(Math.random() * 6) + 1;
        this.data.dice02[i]=dice2[i];
      }
    }  
    for (let i = 0; i < 5; i++) {  
      score2 =score2+ dice2[i];  
      zymk2[dice2[i]-1]=zymk2[dice2[i]-1]+1;
    }   
    for(let i=0;i < 3; i++){
      if(zymk2[i]>=1 && zymk2[i+1]>=1 && zymk2[i+2]>=1 && zymk2[i+3]>=1){
        score2=score2+30;
      }
    }
    for(let i=0;i < 6;i++){
      if(zymk2[i]>=2){
        bignum2=bignum2+1;
      }
      if(zymk2[i]>=3){
        score2=score2+10;
      }
      if(zymk2[i]>=4){
        score2=score2+30;
      }
      if(zymk2[i]>=5){
        score2=score2+60;
      }
    }
    if(bignum2>=2){
      score2=score2+10;
    } 
    this.setData({dice1}); 
    this.setData({score1});
    this.setData({zymk1}); 
    this.setData({dice2}); 
    this.setData({score2});
    this.setData({zymk2}); 
    const kexiao=this.data.kexiao+1;
    this.setData({kexiao});
    if(this.data.kexiao%3==0){
      const currentRound = this.data.currentRound + 1;  
      this.setData({ currentRound });  
      const remainingRounds = this.data.remainingRounds - 1;  
      this.setData({ remainingRounds }); 
      pku=score1-score2;
      pku=pku*this.data.currentMultiplier;
      const c1=this.data.c1+pku;
      const c2=this.data.c2-pku;
      this.setData({pku}); 
      this.setData({c1}); 
      this.setData({c2});
    }
  }
  }
  },  
  selectDice: function() {  
    const selectedDice = 1; 
    this.setData({ selectedDice });  
    const chipCount = this.data.chipCount + 1;  
    this.setData({ chipCount });  
  },  
})