// quiz.js
Page({
    data: {
      questions: [
        {
          question: "你最近睡得好吗？",
          options: ["睡得好", "睡得不好"]
        },
        {
          question: "最近生活上有什么烦心事吗？",
          options: ["有", "没有"]
        },
        {
            question: "会不会因为一些事情感到焦虑？",
            options: ["会", "不会"]
          },
          {
            question: "是什么让你焦虑？",
            options: ["代码写不完", "觉睡不够","学生教不会","领导不听理由","还tm要备考备赛"]
          },
          {
            question: "最近皮肤怎么样？",
            options: ["好", "差"]
          },
          {
            question: "脸色会有些蜡黄暗沉吗？",
            options: ["会", "不会"]
          },
          {
            question: "对自己的肤色满不满意？",
            options: ["满意", "不满意"]
          },
          {
            question: "是什么肤色？",
            options: ["黄色", "白色","黑色","红色"]
          },
          {
            question: "内心向往变白的自己吗？",
            options: ["向往", "不向往"]
          },
          {
            question: "内心还依旧向往纯真的自我？",
            options: ["向往", "不向往"]
          }
      ],
      currentQuestionIndex: 0,
      selectedOption: null
    },
    onLoad: function () {
      this.loadQuestion();
    },
    loadQuestion: function () {
      const currentQuestion = this.data.questions[this.data.currentQuestionIndex];
      this.setData({
        question: currentQuestion.question,
        options: currentQuestion.options,
        selectedOption: null
      });
    },
    selectOption: function(event) {
        const selectedOption = event.currentTarget.dataset.index;
        this.setData({ selectedOption });
        this.nextQuestion();
      },
    nextQuestion: function() {
      const { questions, currentQuestionIndex, selectedOption } = this.data;
      const currentQuestion = questions[currentQuestionIndex];
      if (selectedOption !== null) {
        // 判断是否还有下一题
        if (currentQuestionIndex < questions.length - 1) {
          // 还有下一题，加载下一题
          this.setData({
            currentQuestionIndex: currentQuestionIndex + 1,
            selectedOption: null
          });
          this.loadQuestion();
        } else {
          // 已经是最后一题，跳转到结果页面
          wx.navigateTo({
            url: '/pages/result/result',
          });
        }
      } else {
        wx.showToast({
          title: '请先选择一个选项',
          icon: 'none'
        });
      }
    }
  })