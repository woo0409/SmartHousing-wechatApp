// pages/myorder/myorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    worker_id:"",
    list:[]
  },

  gotoListItem(e){
    var order_id=e.currentTarget.dataset.order_id
    wx.navigateTo({
      url: '../myOrderItem/myOrderItem?order_id='+order_id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //读取缓存用户信息
    var that=this

    wx.getStorage({
      key:"user",
      success(res){
        that.setData({
          worker_id:res.data.belong
        })
      }
    })
    
    console.log(this.data)
    setTimeout(() => {
      wx.request({
        url: 'http://127.0.0.1:8080/myorders',
        method:"GET",
        data:{
          worker_id:this.data.worker_id
        },
        success(res){
          console.log(res.data)
          that.setData({
            list:res.data
          })
        }
      })
    }, 200);
    
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

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