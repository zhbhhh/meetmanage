const { isLoggedIn } = require('./utils/auth');

App({
  globalData: {
    userInfo: null
  },

  onLaunch() {
    // 启动时读取本地登录态
    if (isLoggedIn()) {
      this.globalData.userInfo = wx.getStorageSync('userInfo') || null;
    }
  },

  // 设置登录态
  setLoginState(token, userInfo) {
    wx.setStorageSync('token', token);
    wx.setStorageSync('userInfo', userInfo);
    wx.setStorageSync('loginTime', Date.now());
    this.globalData.userInfo = userInfo;
  },

  // 清除登录态（退出登录）
  clearLoginState() {
    wx.removeStorageSync('token');
    wx.removeStorageSync('userInfo');
    wx.removeStorageSync('loginTime');
    this.globalData.userInfo = null;
  }
});
