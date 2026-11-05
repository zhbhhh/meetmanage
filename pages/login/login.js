const app = getApp();

Page({
  data: {
    loading: false
  },

  onLoad() {
    // 已登录则直接进入首页
    if (wx.getStorageSync('token')) {
      this.goHome();
    }
  },

  // 微信一键登录
  handleLogin() {
    if (this.data.loading) return;
    this.setData({ loading: true });

    // 1. 调用 wx.login 获取 code
    wx.login({
      success: (res) => {
        // 2. 将 code 发送给后端换取登录态（此处用假数据模拟）
        this.mockCode2Session(res.code);
      },
      fail: () => {
        this.setData({ loading: false });
        wx.showToast({ title: '登录失败，请重试', icon: 'none' });
      }
    });
  },

  // 模拟后端 code2Session 接口
  mockCode2Session(code) {
    setTimeout(() => {
      const token = 'mock_token_' + code.slice(0, 8) + '_' + Date.now();
      const userInfo = {
        nickname: '微信用户',
        avatar: '/images/banner-top.jpg'
      };
      // 3. 保存登录态
      app.setLoginState(token, userInfo);
      wx.showToast({ title: '登录成功', icon: 'success' });
      this.goHome();
    }, 600);
  },

  goHome() {
    wx.reLaunch({ url: '/pages/index/index' });
  }
});
