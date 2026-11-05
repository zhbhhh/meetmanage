const { getMeetingDetail } = require('../../utils/api');

Page({
  data: {
    schedule: [],
    loading: true
  },

  onLoad(options) {
    getMeetingDetail(options.id).then((res) => {
      if (res.code === 0) {
        this.setData({ schedule: res.data.detail.schedule, loading: false });
      } else {
        this.setData({ loading: false });
        wx.showToast({ title: res.msg || '加载失败', icon: 'none' });
      }
    });
  }
});
