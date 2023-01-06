// pages/login2/login2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"",
    password:""
  },

  getUsername(e){
    console.log(e.detail.value)
    this.setData({
      username:e.detail.value
    })
  },
  getPassword(e){
    console.log(e.detail.value)
    this.setData({
      password:e.detail.value
    })
  },

  login:function(){
    var username=this.data.username
    var password=this.data.password

    if(username==""||password==""){
      wx.showToast({
        title: '用户名或密码不能为空',
        icon:"none"
      })
      return;
    }

    wx.request({
      url: 'http://127.0.0.1:8080/verifyPwd',
      data:{
        username:username,
        password:password
      },
      method:"GET",
      success(e){
        if(e.data=="success"){
          wx.setStorage({
            key:'user',
            data:{username:username,password:password},
            success(){
              console.log("写入缓存成功")
            }
          })
          wx.switchTab({
            url: '../home/home',
          })
        }else if(e.data=="fail"){
          wx.showToast({
            title: '密码或用户名错误',
            icon:"none"
          })
        }
      }
    })
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