const { getMeetingDetail } = require('../../utils/api');

Page({
  data: {
    albums: [],
    loading: true
  },

  onLoad(options) {
    getMeetingDetail(options.id).then((res) => {
      if (res.code === 0) {
        this.setData({ albums: res.data.detail.live.albums, loading: false });
      } else {
        this.setData({ loading: false });
        wx.showToast({ title: res.msg || '加载失败', icon: 'none' });
      }
    });
  },

  // 查看相册（演示）
  handleAlbum() {
    wx.showToast({ title: '演示：打开相册', icon: 'none' });
  }
});
