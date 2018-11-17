// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
        // arrRankData:{ 
        //   title: [
        //     { text: '流行指数', src: '../../static/rankImg/1.jpg', 
        //         info: [
        //           { songName: '雪落下的声音', singer: '林俊杰' },
        //           { songName: 'POP/STARS', singer: 'Madison Beer' },
        //           { songName: '故长安', singer: '张靓颖' }, 
        //           ] 
        //     },
        //     { text: '热歌', src: '../../static/rankImg/2.jpg',
        //         info:[
        //           { songName: '年少有为', singer: '李荣浩' },
        //           { songName: '归去来兮', singer: '叶炫清' },
        //           { songName: '耳朵', singer: '李荣浩' }, 
        //         ] 
        //     },
        //     { text: '新歌', src: '../../static/rankImg/3.jpg', 
        //         info:[
        //             { songName: 'yiyang', singer: '王源' },
        //             { songName: '33333333', singer: '不知道' },
        //             { songName: '浩浩', singer: '浩浩' }, 
        //         ]
        //     },
        //     { text: '古风', src: '../../static/rankImg/4.jpg', info: []},
        //     { text: '网络歌曲', src: '../../static/rankImg/5.jpg', info: []},
        //     ]
        // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://localhost:3000/toplist/detail',
      success:function(res){
        if(res.data.code==200){
          let list  = res.data.list;
            that.setData({
              arrRankData: list
            });
        }else{
          console.error('请求榜单内容摘要 -状态码非200');
        }
      }
    });
  },
  fun_details(e) {
    let songSheetId = e.currentTarget.dataset.songsheetid;
    let that = this;
    wx.navigateTo({
      url: `../songSheet/songSheet?songSheetId=${songSheetId}`,
      success: function (res) {
        //console.log(e);
        //console.log(`../songSheet/songSheet?songSheetId=${songSheetId}`;
      },
      fail: function (res) { },
      complete: function (res) { },
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})