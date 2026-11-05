const { getMeetingDetail } = require('../../utils/api');

Page({
  data: {
    meeting: null,
    orgs: null,
    loading: true
  },

  onLoad(options) {
    getMeetingDetail(options.id).then((res) => {
      if (res.code === 0) {
        this.setData({
          meeting: res.data,
          orgs: res.data.detail.orgs,
          loading: false
        });
      } else {
        this.setData({ loading: false });
        wx.showToast({ title: res.msg || '加载失败', icon: 'none' });
      }
    });
  }
});
