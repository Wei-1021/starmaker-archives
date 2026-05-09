import { Character, CharacterRole, HackerCode, UpdateLog } from './types';
import { Target, Users } from 'lucide-react';
import React from 'react';

// 本地图片路径前缀 - 使用中文文件名
const IMG_PATH = "images/";

export const HACKER_CODES: HackerCode[] = [
  { code: 'BLDRS GT', answer: 'Baldurs Gate', meaning: '博德之门' },
  { code: 'BRDRLNDS', answer: 'Borderlands', meaning: '无主之地' },
  { code: 'CLL F DTY', answer: 'Call Of Duty', meaning: '使命召唤' },
  { code: 'CNTRK', answer: 'Counter Strike', meaning: '反恐精英' },
  { code: 'DBG', answer: 'Diablo', meaning: '暗黑破坏神' },
  { code: 'DM', answer: 'Doom', meaning: '毁灭战士' },
  { code: 'DNY KNG', answer: 'Donkey Kong', meaning: '大金刚' },
  { code: 'DRGN G', answer: 'Dragon Age', meaning: '龙腾世纪' },
  { code: 'FLLT NW VGS', answer: 'Fallout New Vegas', meaning: '辐射新维加斯' },
  { code: 'FF', answer: 'Fifa', meaning: '实况足球' },
  { code: 'GD F WR', answer: 'God Of War', meaning: '战神' },
  { code: 'G F MPRS', answer: 'Age Of Empires', meaning: '帝国时代' },
  { code: 'GRND THFT AT', answer: 'Grand Theft Auto', meaning: '侠盗猎车手' },
  { code: 'HL', answer: 'Halo', meaning: '光环' },
  { code: 'HLF LF', answer: 'Half Life', meaning: '半条命' },
  { code: 'LDN RNG', answer: 'Elden Ring', meaning: '艾尔登法环' },
  { code: 'LGND F ZLD', answer: 'The Legend of Zelda', meaning: '塞尔达传说' },
  { code: 'MSS FFCT', answer: 'Mass Effect', meaning: '质量效应' },
  { code: 'MTL GR SLD', answer: 'Metal Gear Solid', meaning: '合金装备' },
  { code: 'MNCRFT', answer: 'Minecraft', meaning: '我的世界' },
  { code: 'NDRTL', answer: 'Undertale', meaning: '传说之下' },
  { code: 'PRTL', answer: 'Portal', meaning: '传送门' },
  { code: 'STRT FGHTR', answer: 'Street Fighter', meaning: '街头霸王' },
  { code: 'SKYRM', answer: 'Skyrim', meaning: '上古卷轴' },
  { code: 'SPR MR SNSHN', answer: 'Super Mario Sunshine', meaning: '超级马里奥-太阳之光' },
  { code: 'SPDR MN', answer: 'Spider Man', meaning: '蜘蛛侠' },
  { code: 'TH LGND F ZLD', answer: 'The Legend of Zelda', meaning: '塞尔达传说' },
  { code: 'TH LST F S', answer: 'The Last Of Us', meaning: '最后生还者' },
  { code: 'TH SMS', answer: 'The Sims', meaning: '模拟人生' },
  { code: 'TTR', answer: 'Tetris', meaning: '俄罗斯方块' },
  { code: 'WRLD F WRCRFT', answer: 'World of Warcraft', meaning: '魔兽争霸' },
];

// Update Logs
export const GAME_CHANGELOG: UpdateLog[] = [
  {
    version: "有版本更新内容",
    date: "持续更新",
    changes: [
      "游戏更新详细内容请查看官方网站：https://arvusgames.itch.io/starmakerstory"
    ]
  }
];

export const TOOL_CHANGELOG: UpdateLog[] = [
  {
    version: "1.1",
    date: "2025-12-01",
    changes: [
      "修复凯特、赛里斯、妮娜人物显示问题",
      "补齐所有34个人物攻略档案",
      "新增节日、特殊事件、基础攻略、常见问题、全特效展示图、汉化问题页面",
      "更新侧边栏导航结构",
      "优化页面布局和用户体验"
      
    ]
  },
  {
    version: "1.0",
    date: "2025-11-29",
    changes: [
      "初始版本发布",
      "包含所有角色档案和攻略",
      "集成黑客代码查询工具",
      "支持图片轮播功能",
      "响应式设计适配移动端"
    ]
  }
];

// Author Information
export const AUTHOR_INFO = {
  name: "司暴君",
  description: "为《造星物语》玩家提供最全面的攻略和工具支持",
  supportMessage: "如果这个工具对你有帮助，请考虑支持一下作者！",
  platforms: [
    { name: "Bilibili", link: "https://space.bilibili.com/30964521?spm_id_from=333.1387.0.0", icon: "📺" },
    { name: "抖音", link: "https://www.douyin.com/user/MS4wLjABAAAAWwSM3NnmEU7SDAl0r0POjk34gSZZ1SFYz0JXM0a_YOPylnDyF4ODBBnD-Ld5wDs5?from_tab_name=main", icon: "🎵" }
  ],
  qrWechat: "./images/微信.png",
  qrAlipay: "./images/支付宝.png"
};

// Supporters List
export const SUPPORTERS = [
  "特别鸣谢名单",
  "汉化组全体成员",
  "攻略整理团队",
  "测试人员",
  "社区贡献者",
  "技术支持团队",
  "美术设计团队",
  "文案编辑团队",
  "校对人员",
  "项目协调员",
  "质量保证团队",
  "文档编写团队"
];

// This space is intentionally left blank.
// Character data is now loaded dynamically from data/characters.json
