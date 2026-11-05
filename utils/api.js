// 模拟接口层：所有会议数据均来自此处（后续替换为真实接口即可）
// 会议假数据（列表与详情共用同一数据源）
const MEETINGS = [
  {
    id: 1001,
    title: '2026 第四届国际人工智能与大数据学术会议',
    shortName: 'AIBD 2026',
    date: '2026-12-18 ~ 2026-12-20',
    location: '中国·深圳 国际会展中心',
    status: '报名中',
    cover: '/images/banner-top.jpg',
    detail: {
      intro: [
        '第四届国际人工智能与大数据学术会议（AIBD 2026）将于 2026 年 12 月 18-20 日在深圳举行。会议聚焦人工智能、大数据、机器学习等前沿领域，旨在为国内外专家学者提供高水平的学术交流平台。',
        '本届会议将设置主旨报告、分会场报告、海报展示等多个环节，预计参会人数超过 1500 人。大会录用的论文将由国际知名出版机构结集出版，并提交 EI/CPCI 检索。'
      ],
      welcome: {
        speaker: '大会主席 · 张伟明',
        content: [
          '尊敬的各位专家、各位同仁：',
          '大家好！欢迎参加 2026 第四届国际人工智能与大数据学术会议。过去一年，人工智能与大数据技术持续高速发展，大模型、智能体等方向成果频出，产业落地不断加速。',
          '本届大会汇聚了国内外知名专家学者，围绕前沿理论与工程实践展开深入研讨，相信必将为大家带来一场精彩的学术盛宴。',
          '预祝本次大会圆满成功，祝各位参会愉快！'
        ]
      },
      orgs: {
        host: '深圳市计算机学会',
        organizer: 'AIBD 2026 组委会',
        coOrganizer: '清华大学深圳国际研究生院'
      },
      schedule: [
        { time: '12-18 09:00', title: '签到注册', desc: '深圳国际会展中心 大厅' },
        { time: '12-18 14:00', title: '开幕式', desc: '主会场 A' },
        { time: '12-19 09:00', title: '主旨报告：大模型时代的机遇与挑战', desc: '主会场 A' },
        { time: '12-19 14:00', title: '分会场报告（AI 应用 / 大数据系统）', desc: '分会场 B1-B4' },
        { time: '12-20 09:00', title: '海报展示与自由交流', desc: '展区一层' },
        { time: '12-20 16:00', title: '闭幕式与颁奖', desc: '主会场 A' }
      ],
      guests: [
        { name: '张伟明', title: '中国科学院院士 / 清华大学教授', field: '机器学习' },
        { name: '李晓华', title: 'IEEE Fellow / 北京大学教授', field: '自然语言处理' },
        { name: 'Chen David', title: '国际知名企业首席科学家', field: '大数据架构' },
        { name: '王建国', title: '国家超算中心副主任', field: '高性能计算' }
      ],
      notices: [
        { title: '征文通知：摘要投稿截止日期延长至 11 月 20 日', date: '2026-10-28' },
        { title: '早鸟注册优惠将于 11 月 30 日截止', date: '2026-10-15' },
        { title: '会议酒店预订通道已开放', date: '2026-09-30' }
      ],
      register: {
        fee: '作者注册 2800 元 / 学生注册 1800 元 / 听会注册 1200 元',
        deadline: '2026-11-30',
        note: '注册费包含会议资料、午餐及晚宴；差旅住宿自理。'
      },
      credit: {
        tips: [
          '参会代表可在会议结束后 7 个工作日内申领国家级继续教育学分 6 分。',
          '领取方式：点击下方"在线申领"，填写姓名与注册编号提交申请。',
          '学分证书将以电子版形式发送至注册邮箱，请注意查收。'
        ]
      },
      live: {
        albums: [
          { title: '开幕式与主旨报告', date: '12-18', count: 86, cover: '/images/banner-top.jpg' },
          { title: '分会场报告', date: '12-19', count: 124, cover: '/images/banner-top.jpg' },
          { title: '海报展示与交流', date: '12-20', count: 58, cover: '/images/banner-top.jpg' },
          { title: '闭幕式与颁奖', date: '12-20', count: 42, cover: '/images/banner-top.jpg' }
        ]
      },
      contact: {
        phone: '0755-12345678',
        email: 'aibd2026@example.com',
        org: 'AIBD 2026 组委会'
      }
    }
  },
  {
    id: 1002,
    title: '2026 全国智能医学影像高峰论坛',
    shortName: 'IMIF 2026',
    date: '2026-11-25 ~ 2026-11-27',
    location: '中国·北京 国家会议中心',
    status: '筹备中',
    cover: '/images/banner-top.jpg',
    detail: {
      intro: [
        '2026 全国智能医学影像高峰论坛（IMIF 2026）将于 11 月底在北京召开，汇聚医学影像、临床医学与人工智能领域的顶尖专家。',
        '论坛设主论坛及影像组学、手术导航、病理 AI 三个分论坛，同期举办青年学者优秀论文评选。'
      ],
      welcome: {
        speaker: '论坛主席 · 刘志强',
        content: [
          '各位专家、各位同道：',
          '欢迎参加 2026 全国智能医学影像高峰论坛。智能医学影像正处于快速发展期，产学研医协同创新方兴未艾。',
          '本次论坛汇聚临床、科研与产业界的领军人物，共话智能影像的机遇与挑战。',
          '预祝论坛圆满成功！'
        ]
      },
      orgs: {
        host: '中华医学会影像技术分会',
        organizer: 'IMIF 2026 组委会',
        coOrganizer: '北京协和医院放射科'
      },
      schedule: [
        { time: '11-25 09:00', title: '签到与开幕致辞', desc: '国家会议中心 大宴会厅' },
        { time: '11-25 14:00', title: '主旨报告：医学影像大模型进展', desc: '大宴会厅' },
        { time: '11-26 09:00', title: '分论坛：影像组学与临床转化', desc: '会议室 201' },
        { time: '11-26 14:00', title: '分论坛：手术导航与介入影像', desc: '会议室 202' },
        { time: '11-27 09:00', title: '青年学者论坛', desc: '会议室 203' },
        { time: '11-27 15:00', title: '闭幕总结', desc: '大宴会厅' }
      ],
      guests: [
        { name: '刘志强', title: '中华医学会影像分会主委', field: '放射影像' },
        { name: '陈静怡', title: '国家杰青 / 上海交大教授', field: '影像组学' },
        { name: '赵鹏', title: '知名三甲医院放射科主任', field: '临床应用' }
      ],
      notices: [
        { title: '论坛官网与小程序正式上线', date: '2026-09-20' },
        { title: '征稿通道已开启，欢迎投递摘要', date: '2026-10-05' }
      ],
      register: {
        fee: '注册费 1500 元（学生 800 元）',
        deadline: '2026-11-15',
        note: '住宿统一安排在国家会议中心大酒店，费用自理。'
      },
      credit: {
        tips: [
          '参会代表可申领国家级 I 类继续教育学分 5 分。',
          '学分申领通道将于会议结束后开放，请关注通知。',
          '证书领取需提供注册编号及实名信息。'
        ]
      },
      live: {
        albums: [
          { title: '开幕式', date: '11-25', count: 36, cover: '/images/banner-top.jpg' },
          { title: '主旨报告', date: '11-25', count: 52, cover: '/images/banner-top.jpg' },
          { title: '分论坛现场', date: '11-26', count: 78, cover: '/images/banner-top.jpg' }
        ]
      },
      contact: {
        phone: '010-87654321',
        email: 'imif2026@example.com',
        org: 'IMIF 2026 组委会'
      }
    }
  },
  {
    id: 1003,
    title: '第十二届云计算与边缘计算国际研讨会',
    shortName: 'CCEC 2026',
    date: '2026-10-10 ~ 2026-10-12',
    location: '中国·杭州 云栖小镇',
    status: '已结束',
    cover: '/images/banner-top.jpg',
    detail: {
      intro: [
        '第十二届云计算与边缘计算国际研讨会（CCEC 2026）已于 10 月在杭州成功举办，来自全球 20 多个国家和地区的 600 余名代表参会。',
        '研讨会围绕云原生、边缘智能、分布式系统等议题展开深入交流，感谢各位专家学者的支持与参与。'
      ],
      welcome: {
        speaker: '大会主席 · 孙立新',
        content: [
          '各位专家、各位代表：',
          '感谢大家参加第十二届云计算与边缘计算国际研讨会。本次研讨会全球超过 600 名代表齐聚杭州，交流成果丰硕。',
          '期待与各位在下一届会议再聚！'
        ]
      },
      orgs: {
        host: '浙江省计算机学会',
        organizer: 'CCEC 2026 组委会',
        coOrganizer: '浙江大学计算机科学与技术学院'
      },
      schedule: [
        { time: '10-10 09:00', title: '开幕式', desc: '云栖小镇国际会展中心' },
        { time: '10-10 14:00', title: '主旨报告：云边协同的下一代基础设施', desc: '主会场' },
        { time: '10-11 09:00', title: '技术论坛：Serverless 实践', desc: '分会场一' },
        { time: '10-12 14:00', title: '闭幕式', desc: '主会场' }
      ],
      guests: [
        { name: '孙立新', title: 'ACM Fellow / 浙江大学教授', field: '分布式系统' },
        { name: 'Wang Michael', title: '国际云服务企业架构师', field: '云原生' }
      ],
      notices: [
        { title: '会议照片与回放视频已上传', date: '2026-10-20' },
        { title: '最佳论文奖获奖名单公布', date: '2026-10-15' }
      ],
      register: {
        fee: '本届注册已结束，感谢支持',
        deadline: '2026-10-01',
        note: '下届会议信息请关注官网通知。'
      },
      credit: {
        tips: [
          '本届会议学分申领已于 2026-10-31 截止。',
          '已申领的代表，证书已发送至注册邮箱。',
          '如有疑问请联系组委会邮箱。'
        ]
      },
      live: {
        albums: [
          { title: '开幕式与主旨报告', date: '10-10', count: 96, cover: '/images/banner-top.jpg' },
          { title: '技术论坛', date: '10-11', count: 132, cover: '/images/banner-top.jpg' },
          { title: '闭幕式', date: '10-12', count: 45, cover: '/images/banner-top.jpg' }
        ]
      },
      contact: {
        phone: '0571-11223344',
        email: 'ccec2026@example.com',
        org: 'CCEC 2026 组委会'
      }
    }
  }
];

// 模拟网络请求的延时
function delay(data, ms = 400) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ code: 0, data }), ms);
  });
}

// 获取会议列表
function getMeetingList() {
  const list = MEETINGS.map(({ id, title, shortName, date, location, status, cover }) => ({
    id, title, shortName, date, location, status, cover
  }));
  return delay(list);
}

// 获取会议详情
function getMeetingDetail(id) {
  const meeting = MEETINGS.find((m) => m.id === Number(id));
  if (!meeting) {
    return Promise.resolve({ code: 404, data: null, msg: '会议不存在' });
  }
  return delay(meeting);
}

module.exports = { getMeetingList, getMeetingDetail };
