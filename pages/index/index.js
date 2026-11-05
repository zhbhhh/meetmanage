const { isLoggedIn } = require('../../utils/auth');
const { getMeetingList } = require('../../utils/api');

Page({
  data: {
    meetingList: [],
    loading: true
  },

  onShow() {
    // 未登录则跳转登录页，已登录直接展示首页
    if (!isLoggedIn()) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }
    this.fetchMeetingList();
  },

  // 从接口获取会议列表（当前为假数据）
  fetchMeetingList() {
    this.setData({ loading: true });
    getMeetingList().then((res) => {
      if (res.code === 0) {
        this.setData({ meetingList: res.data, loading: false });
      } else {
        this.setData({ loading: false });
        wx.showToast({ title: '获取会议列表失败', icon: 'none' });
      }
    });
  },

  // 点击进入会议详情
  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` });
  },

  // 退出登录
  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          getApp().clearLoginState();
          wx.redirectTo({ url: '/pages/login/login' });
        }
      }
    });
  }
});
