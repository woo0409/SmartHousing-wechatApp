// pages/receiptslist/receiptslist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMsg:{},
    list:[],
    timer:""
  },

  gotoRecommendItem(e){
    var title=e.currentTarget.dataset.title
    var text=e.currentTarget.dataset.text
    wx.navigateTo({
      url: '../recommendItem/recommendItem?title='+title+"&text="+text
    })
    console.log(title+"|"+text)
  },

  getRecommend(){
    var that=this
      wx.request({
        url: 'http://127.0.0.1:8080/getOrder',
        success(res){
          that.setData({
            list:res.data
          })
        }
      })
  },


  
  /**
   * 生命周期函数--监听页面加载
   */



  onLoad(options) {
    console.log(this.data.list)
    var that=this;
    wx.getStorage({
      key:"user",
      success(res){
        console.log(res.data)
        that.setData({
          userMsg:res.data
        })
      }
    })
    wx.request({
      url: 'http://127.0.0.1:8080/getOrder',
      success(res){
        console.log(res.data)
        that.setData({
          list:res.data
        })
      }
    })
  },

  //接单按钮
  out(e){
    var that=this
    var order_id=e.currentTarget.dataset.orderid
    var id=e.currentTarget.dataset.id
    wx.request({
      url: 'http://127.0.0.1:8080/outOrder',
      data:{
        id:id,
        order_id:order_id,
        belong:this.data.userMsg.belong,
        name:this.data.userMsg.name},
      success(e){
        if(e.data=="success"){
          that.getRecommend()
          wx.showToast({
            title: '确认成功',
            icon:"none"
          })
        }else{
          wx.showToast({
            title: '操作失败',
            icon:"none"
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    var that=this;
    that.data.timer= setInterval(function () {
      that.getRecommend()
    }, 1500) 
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    var that = this;
      clearInterval(that.data.timer);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    var that = this;
    clearInterval(that.data.timer);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})