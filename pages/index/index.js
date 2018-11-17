//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    arrImgSwiper: [
      '../../static/images/1.png',
      '../../static/images/2.png',
      '../../static/images/3.png',
      '../../static/images/4.png'
    ],
    // songLength: [
    //   { src: '../../static/songImg/1.jpg', name: '热歌' },
    //   { src: '../../static/songImg/2.jpg', name: '一人一首招牌歌' },
    //   { src: '../../static/songImg/3.jpg', name: '催泪大杀器！盘点演唱会经典万人大合唱' },
    //   { src: '../../static/songImg/4.jpg', name: '精选内地十大民谣歌手代表作' },
    //   { src: '../../static/songImg/5.jpg', name: 'hop单曲大推荐' },
    //   { src: '../../static/songImg/6.jpg', name: 'ACG纯音乐赏析合辑' },
    // ],
    // indexSongSheet:[],
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../songSheet/songSheet'
    })
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
  onLoad: function (){
    let that = this;
    wx.request({
      url: 'http://localhost:3000/personalized',
      success:function(res){
        if (res.data.code==200){
          that.setData({
            indexSongSheet: res.data.result
          });
        }else{
          console.log('personalized歌单状态非200');
        }
      }
    })
  }
})
