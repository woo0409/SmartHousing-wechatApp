// pages/OrderItem/OrderItem.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderItem:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that=this

    console.log(options.order_id)
    var order_id=options.order_id
    
    wx.request({
      url: 'http://127.0.0.1:8080/getOrderItem',
      method:"GET",
      data:{
        order_id:order_id
      },
      success(res){
        console.log(res.data)
        that.setData({
          orderItem:res.data
        })
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