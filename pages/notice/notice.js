const { getMeetingDetail } = require('../../utils/api');

Page({
  data: {
    notices: [],
    loading: true
  },

  onLoad(options) {
    getMeetingDetail(options.id).then((res) => {
      if (res.code === 0) {
        this.setData({ notices: res.data.detail.notices, loading: false });
      } else {
        this.setData({ loading: false });
        wx.showToast({ title: res.msg || '加载失败', icon: 'none' });
      }
    });
  }
});
