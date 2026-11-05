const { getMeetingDetail } = require('../../utils/api');

Page({
  data: {
    register: null,
    status: '',
    loading: true
  },

  onLoad(options) {
    getMeetingDetail(options.id).then((res) => {
      if (res.code === 0) {
        this.setData({
          register: res.data.detail.register,
          status: res.data.status,
          loading: false
        });
      } else {
        this.setData({ loading: false });
        wx.showToast({ title: res.msg || '加载失败', icon: 'none' });
      }
    });
  },

  // 模拟提交报名
  handleSignup() {
    if (this.data.status === '已结束') return;
    wx.showModal({
      title: '报名参会',
      content: '确认提交报名信息？（当前为演示）',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '报名成功', icon: 'success' });
        }
      }
    });
  }
});
