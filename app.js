const scorecards = [
  {
    label: '战略价值',
    value: '8.5 / 10',
    text: '方向对，既能做短期变现，也有机会沉淀为影楼 AI 升级解决方案。'
  },
  {
    label: '短期变现能力',
    value: '8 / 10',
    text: '预演卡、升级写真、超清精修都能比较快卖出去。'
  },
  {
    label: '落地难度',
    value: '6 / 10',
    text: '比自己做平台轻很多，但依然需要案例、SOP 和质检。'
  },
  {
    label: '最终定位',
    value: '服务优先',
    text: '先卖服务，不要急着做 SaaS 或工作流平台。'
  }
];

const pains = [
  {
    title: '提高成交率',
    description: '通过换装 / 风格预演，让客户先看到效果，再决定拍不拍、买哪档套餐。'
  },
  {
    title: '提高客单价',
    description: '通过高清修复、多风格延展、精修升级，把利润从低价拍摄后移到加购。'
  },
  {
    title: '提高交付效率',
    description: '通过图像中台型能力，把后期从纯人工变成 AI 批处理 + 人工质检。'
  },
  {
    title: '扩展收入边界',
    description: '通过产品摄影 / 场景图，把影楼升级成视觉内容服务商，而不只是写真馆。'
  }
];

const productLines = [
  {
    tag: '引流产品线',
    title: 'AI 风格预演卡',
    description: '用低门槛预演替代抽象沟通，让客户先看到效果，再决定是否升级正式拍摄。',
    bullets: ['适合：婚纱、礼服、写真咨询转化', '作用：提升咨询转成交率', '前端卖点：先看效果，再决定下单']
  },
  {
    tag: '主力营收产品线',
    title: 'AI 升级写真',
    description: '把一次底图变成多套风格和多种交付物，适合门店做标准化高颜值产品。',
    bullets: ['适合：朋友圈写真、情侣、轻婚纱', '作用：形成主力营收款', '前端卖点：一次底图，延展多套风格']
  },
  {
    tag: '高毛利产品线',
    title: 'AI 超清精修',
    description: '不改人，重点提升清晰度、质感和放大能力，是最容易让客户直接付费的加购点。',
    bullets: ['适合：出册、挂画、低像素补救、老照片', '作用：做高毛利加购', '前端卖点：更清晰、更高级、更适合打印']
  },
  {
    tag: '业务扩展产品线',
    title: '商家视觉内容服务',
    description: '帮助门店从 C 端写真扩展到 B 端本地商家视觉服务，打开新的收入天花板。',
    bullets: ['适合：花店、饰品、婚庆、美甲、服装', '作用：扩展 B 端收入', '前端卖点：轻量商拍，适合高频上新']
  }
];

const cases = [
  {
    id: 'case-preview',
    rank: '案例 01 · 成交工具',
    name: 'AI 风格预演卡',
    sourceName: '贴身品类换装（2509）',
    image: './assets/images/case-bridal.jpg',
    imageAlt: '婚纱与礼服风格预演参考图',
    link: 'https://www.runninghub.cn/ai-detail/1990350901753901058',
    jump: '#product-lines',
    meta: ['婚纱 / 礼服 / 写真', '9586 使用', '62 点赞', '735 收藏', '成功率 99%'],
    description: '最适合放在前端咨询环节的能力原型。它的价值不在最终成片，而在先让客户看到效果，提升成交率。',
    uses: ['婚纱 / 礼服试样', '写真风格试看', '礼服馆联营试装图'],
    packaging: ['低价引流', '成交辅助', '预演即转化']
  },
  {
    id: 'case-photo-factory',
    rank: '案例 02 · 主力营收',
    name: 'AI 升级写真工厂',
    sourceName: '全能图片 Pro',
    image: './assets/images/case-fashion.jpg',
    imageAlt: '时尚写真升级参考图',
    link: 'https://www.runninghub.cn/ai-detail/1991550248581603329',
    jump: '#pricing',
    meta: ['多风格写真', '约 635.4K 使用', '715 点赞', '2773 收藏', '成功率 91%'],
    description: '这是最像影楼 AI 后期工厂底座的能力原型，适合承接 AI 轻写真、套系延展、海报和发圈图。',
    uses: ['AI 轻写真', '写真多风格延展', '朋友圈图 / 海报图 / 样张生产'],
    packaging: ['主力套餐', '后期中台', '多风格交付']
  },
  {
    id: 'case-retouch',
    rank: '案例 03 · 高毛利加购',
    name: 'AI 超清精修包',
    sourceName: 'FLUX.2-Klein 高清修复',
    image: './assets/images/case-studio.jpg',
    imageAlt: '高质感人像精修参考图',
    link: 'https://www.runninghub.cn/ai-detail/2013556064565858306',
    jump: '#pricing',
    meta: ['高清放大', '6585 使用', '37 点赞', '304 收藏', '平均 47s'],
    description: '最适合直接卖钱的高毛利能力原型，重点提升人物清晰度、细节质感和出册放大能力。',
    uses: ['高清精修升级', '老照片修复', '放大出册 / 挂画'],
    packaging: ['高毛利加购', '打印升级', '老照片焕新']
  },
  {
    id: 'case-biz',
    rank: '案例 04 · B 端扩展',
    name: '商家内容快拍工厂',
    sourceName: '一键生成产品多角度场景专业摄影',
    image: './assets/images/case-product.jpg',
    imageAlt: '商家产品内容拍摄参考图',
    link: 'https://www.runninghub.cn/ai-detail/2026115899555586050',
    jump: '#roadmap',
    meta: ['产品场景图', '100 使用', '7 点赞', '31 收藏', '平均 105s'],
    description: '非常适合影楼切到本地商家视觉服务：新品图、活动图、社媒图都能快速交付。',
    uses: ['产品场景图', '本地商家视觉服务', '轻量商拍内容包'],
    packaging: ['B 端服务', '月度内容包', '本地商家合作']
  },
  {
    id: 'case-social',
    rank: '案例 05 · 传播模板',
    name: '社媒传播写真模板',
    sourceName: '三宫格电影氛围感写真（又是一年冬）',
    image: './assets/images/case-wedding.jpg',
    imageAlt: '社媒传播写真参考图',
    link: 'https://www.runninghub.cn/ai-detail/1982060072979308545',
    jump: '#launch-pack',
    meta: ['节日写真', '3950 使用', '79 点赞', '281 收藏'],
    description: '更适合作为门店营销型模板，用来做主题活动、社媒传播和低门槛轻交付产品。',
    uses: ['节日写真', '三宫格传播图', '门店引流模板'],
    packaging: ['传播引流', '节日主题', '社媒模板']
  }
];

const moats = [
  {
    title: '套餐设计能力',
    text: '同样的能力原型，能不能被包装成引流款、主力款、加购款、B 端款，决定了商业价值。'
  },
  {
    title: '交付稳定性',
    text: '客户不关心你怎么跑图，客户关心像不像本人、能不能发圈、能不能出册。'
  },
  {
    title: '销售转化话术',
    text: '风格预演最强的地方不是图，而是让客户更容易下决定。'
  },
  {
    title: '本地案例密度',
    text: '一旦积累第一批真实案例，后续会越来越像一个可复制的本地服务生意。'
  }
];

const risks = [
  {
    title: '沉迷能力，不做产品化',
    text: '如果团队一直研究哪个案例更酷，而不是客户为什么愿意付钱，最后只会变成展示项目。'
  },
  {
    title: '生成效果不稳定',
    text: '脸部、手部、服装边缘、多图一致性都需要人工筛选和质检，不能幻想纯自动。'
  },
  {
    title: '前端表达错位',
    text: '对外不能卖“工作流”，要卖“更省时间、更高颜值、更适合传播的服务”。'
  },
  {
    title: '一上来就想做平台',
    text: '最优路径永远是先做服务、先收钱、先沉淀 SOP，再决定是否平台化。'
  }
];

function renderScorecards() {
  const container = document.getElementById('scoreGrid');
  container.innerHTML = scorecards.map(item => `
    <article class="score-card">
      <div class="score-label">${item.label}</div>
      <div class="score-value">${item.value}</div>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function renderPains() {
  const container = document.getElementById('painGrid');
  container.innerHTML = pains.map(item => `
    <article class="highlight-card">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `).join('');
}

function renderLines() {
  const container = document.getElementById('lineGrid');
  container.innerHTML = productLines.map(line => `
    <article class="line-card">
      <div class="tag">${line.tag}</div>
      <h3>${line.title}</h3>
      <p>${line.description}</p>
      <ul>${line.bullets.map(item => `<li>${item}</li>`).join('')}</ul>
    </article>
  `).join('');
}

function renderGallery() {
  const container = document.getElementById('galleryGrid');
  container.innerHTML = cases.map(item => `
    <article class="gallery-card">
      <img src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
      <div class="gallery-copy">
        <strong>${item.name}</strong>
        <span>${item.rank}</span>
      </div>
    </article>
  `).join('');
}

function renderCaseNav() {
  const container = document.getElementById('caseNavGrid');
  container.innerHTML = cases.map(item => `
    <article class="case-nav-card">
      <a class="case-anchor" href="#${item.id}">${item.name}</a>
      <div class="case-nav-actions">
        <a class="mini-link" href="#${item.id}">页内跳转</a>
        <a class="mini-link external" href="${item.link}" target="_blank" rel="noreferrer">外链案例 ↗</a>
      </div>
    </article>
  `).join('');
}

function renderCases() {
  const container = document.getElementById('productGrid');
  container.innerHTML = cases.map(item => `
    <article class="product-card" id="${item.id}">
      <div class="product-image-wrap">
        <img class="product-image" src="${item.image}" alt="${item.imageAlt}" loading="lazy" />
      </div>
      <div class="product-top">
        <div>
          <div class="product-rank">${item.rank}</div>
          <h3>${item.name}</h3>
          <div class="source-note">原始案例：${item.sourceName}</div>
        </div>
        <div class="action-stack">
          <a class="product-link" href="${item.link}" target="_blank" rel="noreferrer">查看外链案例 ↗</a>
          <a class="product-link ghost" href="${item.jump}">跳到相关策略 ↓</a>
        </div>
      </div>
      <div class="product-meta">
        ${item.meta.map(meta => `<span>${meta}</span>`).join('')}
      </div>
      <p>${item.description}</p>
      <div>
        <strong>适合用途</strong>
        <ul>${item.uses.map(use => `<li>${use}</li>`).join('')}</ul>
      </div>
      <div>
        <strong>建议包装</strong>
        <div class="product-bottom">
          ${item.packaging.map(tag => `<span class="pill">${tag}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

function renderStackList(targetId, items, tone = '') {
  const container = document.getElementById(targetId);
  container.innerHTML = items.map(item => `
    <div class="stack-item ${tone}">
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  `).join('');
}

renderScorecards();
renderPains();
renderLines();
renderGallery();
renderCaseNav();
renderCases();
renderStackList('moatList', moats, 'tone-positive');
renderStackList('riskList', risks, 'tone-warning');
