const { getMeetingDetail } = require('../../utils/api');

Page({
  data: {
    credit: null,
    status: '',
    loading: true
  },

  onLoad(options) {
    getMeetingDetail(options.id).then((res) => {
      if (res.code === 0) {
        this.setData({
          credit: res.data.detail.credit,
          status: res.data.status,
          loading: false
        });
      } else {
        this.setData({ loading: false });
        wx.showToast({ title: res.msg || '加载失败', icon: 'none' });
      }
    });
  },

  // 模拟在线申领学分
  handleApply() {
    if (this.data.status === '已结束') return;
    wx.showModal({
      title: '学分领取',
      content: '确认提交学分申领信息？（当前为演示）',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '申领成功', icon: 'success' });
        }
      }
    });
  }
});
