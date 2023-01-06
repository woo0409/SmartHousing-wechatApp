// pages/outs/outs.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataCode:''
  },
  Saopma:function(){
    wx.scanCode({
      success:(res)=>{
        console.log("扫码成功："+JSON.stringify(res))
        // 扫码成功后  在此处理接下来的逻辑
        this.setData({
          dataCode:res.result
        })
        console.log(res.result)
      }
    })
  },
  showData:function(){
        console.log(); 
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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