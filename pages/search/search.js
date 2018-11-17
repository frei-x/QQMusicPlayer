// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bGetFocus:false,
    timer:null,
    songList:[
      {
        "id": 400162138,
        "name": "请搜索（海阔天空）",
        "artists": [
          {
            "id": 11127,
            "name": "浩浩",
            "picUrl": null,
            "alias": [],
            "albumSize": 0,
            "picId": 0,
            "img1v1Url": "http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
            "img1v1": 0,
            "trans": null
          }
        ]},
        {
          "id": 400162138,
          "name": "海阔天空",
          "artists": [{
            "name": "Beyond"
          }]
        }],
      hotWord:[]
      },
funFocus(){
  console.log('取到焦点');
  this.setData({
    bGetFocus: true
  })
},
 funCancel(){
   this.setData({
     bGetFocus: false
   });
 },
  fun_input(e){
    let that = this;
    clearTimeout(this.timer);
    this.timer=setTimeout(function(){
      console.log(e.detail.value);
      wx.request({
        url: 'http://localhost:3000/search?keywords=' + e.detail.value,
        success: function (res) {
          if (res.data.code==200){
            console.log(res);
            that.setData({
              songList: res.data.result.songs
            });
          }else{
            console.log(e.detail.value+':状态码错误');
          }
         
        }
      });
    },600);

  },
  fun_hotWord(e){
    let that = this;
    //console.log(e.currentTarget.dataset.value);
    //data-里面的value
    let value = e.currentTarget.dataset.value
    //显示搜索列表的DOM
    this.setData({
      bGetFocus: true
    });
    //点击热搜热词,搜索其结果
    wx.request({
      url: 'http://localhost:3000/search?keywords=' + value,
      success: function (res) {
        if (res.data.code == 200) {
          console.log(res);
          that.setData({
            songList: res.data.result.songs
          });
        } else {
          console.log(e.detail.value + ':状态码错误');
        }

      }
    });
  },
  fun_searchDetailsPage(e){
    console.log(e.currentTarget)
    wx.navigateTo({
      url: `../details/details?info=${JSON.stringify(e.currentTarget.dataset)}`,
      success: function (res) {

      },
      fail: function (res) { },
      complete: function (res) { },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.request({
      url: 'http://localhost:3000/search/hot',
      success:function(res){
        if (res.data.code == 200 && res.data.result)
        that.setData({
          hotWord: res.data.result.hots
        })
      }
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