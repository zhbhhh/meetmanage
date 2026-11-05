// 登录态管理工具
// token 有效期（毫秒），7 天
const TOKEN_EXPIRE = 7 * 24 * 60 * 60 * 1000;

function getToken() {
  const token = wx.getStorageSync('token');
  const loginTime = wx.getStorageSync('loginTime');
  if (!token || !loginTime) return '';
  // 登录态过期则清除
  if (Date.now() - loginTime > TOKEN_EXPIRE) {
    wx.removeStorageSync('token');
    wx.removeStorageSync('userInfo');
    wx.removeStorageSync('loginTime');
    return '';
  }
  return token;
}

function isLoggedIn() {
  return !!getToken();
}

module.exports = { getToken, isLoggedIn, TOKEN_EXPIRE };
