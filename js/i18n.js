/* ============================================================
 * i18n.js —— 界面文案字典（纯数据 + 取词函数，默认中文）
 *   EB_I18N.t(key, params)  按当前语言取词，{x} 占位符插值
 *   EB_I18N.lang            当前语言 'zh' | 'en'
 *   EB_I18N.set(lang)       切换语言（仅更新字典指针，DOM 刷新由交互层负责）
 * ============================================================ */
window.EB_I18N = (function () {
  'use strict';

  var STRINGS = {
    zh: {
      docTitle: 'Emotion Ball 表情球',
      brandName: '表情球',
      navWall: '陈列墙',
      navAlbum: '画册',
      langBtn: 'EN',
      themeToDark: '切换暗黑模式',
      themeToLight: '切换明亮模式',
      settingsBtn: '设置',

      heroCta: '进入展馆',

      tabAll: '全部',
      galleryHint: '点击缩略图切换 · 悬停预览动画 · ← / → 键翻页',
      babiesLabel: '团队小球',
      babyClick: '点击让主球切到此状态',
      prevEmotion: '上一个表情',
      nextEmotion: '下一个表情',
      stageClose: '关闭预览',
      stageLabel: '表情主舞台',
      thumbSuffix: '缩略预览',

      drawerTitle: '设置',
      drawerClose: '关闭设置',
      secAppearance: '外观',
      lblShape: '身体形状',
      shapeBlob: '圆胖',
      shapeWedge: '三角',
      shapeGem: '菱形',
      lblSketch: '线稿模式',
      secDemo: '演示',
      lblTour: '自动巡演',
      lblInterval: '巡演间隔',
      lblSpeed: '切换速度',
      speedFast: '流畅',
      speedStandard: '标准',
      speedGentle: '轻柔',

      toastTourOn: '自动巡演已开启:「{name}」共 {n} 个表情',
      toastSpeed: '已切换表情切换速度:{name}',
      toastTourOff: '自动巡演已关闭',
      toastSketchOn: '已切换为线稿模式(仅轮廓描边)',
      toastSketchOff: '已切回实体填充',
      toastShape: '已切换身体形状:{name}',
      toastThemeDark: '已切换到暗黑模式',
      toastThemeLight: '已切换到明亮模式'
    },

    en: {
      docTitle: 'Emotion Ball Gallery',
      brandName: 'Emotion Ball',
      navWall: 'Wall',
      navAlbum: 'Album',
      langBtn: '中',
      themeToDark: 'Switch to dark mode',
      themeToLight: 'Switch to light mode',
      settingsBtn: 'Settings',

      heroCta: 'Enter the gallery',

      tabAll: 'All',
      galleryHint: 'Click a thumbnail to switch · Hover to preview · ← / → to flip',
      babiesLabel: 'Team bots',
      babyClick: 'click to switch the main bot',
      prevEmotion: 'Previous emotion',
      nextEmotion: 'Next emotion',
      stageClose: 'Close preview',
      stageLabel: 'Main emotion stage',
      thumbSuffix: 'thumbnail preview',

      drawerTitle: 'Settings',
      drawerClose: 'Close settings',
      secAppearance: 'Appearance',
      lblShape: 'Body shape',
      shapeBlob: 'Blob',
      shapeWedge: 'Wedge',
      shapeGem: 'Gem',
      lblSketch: 'Sketch mode',
      secDemo: 'Showcase',
      lblTour: 'Auto tour',
      lblInterval: 'Tour interval',
      lblSpeed: 'Switch speed',
      speedFast: 'Swift',
      speedStandard: 'Standard',
      speedGentle: 'Gentle',

      toastTourOn: 'Auto tour started: {n} emotions in "{name}"',
      toastSpeed: 'Switch speed: {name}',
      toastTourOff: 'Auto tour stopped',
      toastSketchOn: 'Sketch mode on (outline only)',
      toastSketchOff: 'Back to solid fill',
      toastShape: 'Body shape switched to {name}',
      toastThemeDark: 'Dark mode on',
      toastThemeLight: 'Light mode on'
    }
  };

  var api = {
    lang: 'zh',
    set: function (lang) {
      api.lang = STRINGS[lang] ? lang : 'zh';
      return api.lang;
    },
    t: function (key, params) {
      var s = (STRINGS[api.lang] && STRINGS[api.lang][key]) || STRINGS.zh[key] || key;
      if (params) {
        for (var k in params) s = s.split('{' + k + '}').join(String(params[k]));
      }
      return s;
    }
  };
  return api;
})();
