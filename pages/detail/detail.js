const { getMeetingDetail } = require('../../utils/api');

// 宫格卡片：点击进入独立页面
// size: lg=半宽 / sm=窄 / mid=中宽
const NAV_ITEMS = [
  { key: 'welcome', label: '欢迎致辞', en: 'Welcome speech', icon: '/images/icon-welcome.jpg', url: '/pages/welcome/welcome', size: 'lg' },
  { key: 'info', label: '会议信息', en: 'Meeting Information', icon: '/images/icon-info.jpg', url: '/pages/info/info', size: 'lg' },
  { key: 'notice', label: '会议通知', en: 'Meeting Notice', icon: '/images/icon-notice.jpg', url: '/pages/notice/notice', size: 'sm' },
  { key: 'agenda', label: '会议日程', en: 'Meeting Agenda', icon: '/images/icon-schedule.jpg', url: '/pages/agenda/agenda', size: 'mid' },
  { key: 'signup', label: '报名参会', en: 'Sign up', icon: '/images/icon-register.jpg', url: '/pages/signup/signup', size: 'sm' },
  { key: 'credit', label: '学分领取', en: 'Credit collection', icon: '/images/icon-credit.jpg', url: '/pages/credit/credit', size: 'lg' },
  { key: 'live', label: '照片直播', en: 'Photo live streaming', icon: '/images/icon-live.jpg', url: '/pages/live/live', size: 'lg' }
];

Page({
  data: {
    meeting: null,
    loading: true,
    navItems: NAV_ITEMS
  },

  onLoad(options) {
    this.meetingId = options.id;
    getMeetingDetail(this.meetingId).then((res) => {
      if (res.code === 0) {
        wx.setNavigationBarTitle({ title: res.data.shortName || '会议详情' });
        this.setData({ meeting: res.data, loading: false });
      } else {
        this.setData({ loading: false });
        wx.showToast({ title: res.msg || '会议不存在', icon: 'none' });
      }
    });
  },

  // 点击卡片进入对应子页面
  handleNav(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({ url: `${url}?id=${this.meetingId}` });
  },

  onShareAppMessage() {
    const m = this.data.meeting;
    return {
      title: m ? m.title : '会议详情',
      path: `/pages/detail/detail?id=${this.meetingId}`
    };
  }
});
