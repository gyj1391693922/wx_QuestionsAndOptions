// result.js
Page({
    onLoad: function () {
      // 在 onLoad 生命周期中计算用户的得分，并保存在 data 中
      const score = wx.getStorageSync('score') || 0;
      this.setData({ score });
    },
    restartQuiz: function() {
      // 重新开始答题，将当前题目索引重置为 0，并跳转到 quiz 页面
      wx.navigateTo({
        url: '/pages/quiz/quiz',
      })
    },
    gotoIndex:function(){
        wx.navigateTo({
          url: '/pages/index/index',
        })
    }
  })