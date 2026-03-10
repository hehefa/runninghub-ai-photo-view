const scorecards = [
  {
    label: '战略价值',
    value: '8.5 / 10',
    text: '方向对，既能做短期变现，也有机会沉淀为影楼 AI 升级方案。'
  },
  {
    label: '短期变现能力',
    value: '8 / 10',
    text: '预览包、轻写真、精修升级包都能比较快卖出去。'
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
    description: '通过图像中台型工作流，把后期从纯人工变成 AI 批处理 + 人工质检。'
  },
  {
    title: '扩展收入边界',
    description: '通过产品摄影 / 场景图，把影楼升级成视觉内容服务商，而不只是写真馆。'
  }
];

const productLines = [
  {
    tag: '引流产品线',
    title: 'AI 风格预览 / AI 试拍',
    description: '用低门槛预览替代抽象沟通，让客户先看到效果，再决定是否升级正式拍摄。',
    bullets: ['对应产品：贴身品类换装（2509）、全能图片 Pro', '适合：婚纱、礼服、写真咨询转化', '目标：提升咨询转成交率']
  },
  {
    tag: '主力营收产品线',
    title: 'AI 轻写真 / AI 升级写真',
    description: '把一次底图变成多套风格和多种交付物，适合门店做标准化高颜值产品。',
    bullets: ['对应产品：全能图片 Pro、全能图片 2.0、三宫格电影氛围感写真', '适合：朋友圈写真、情侣、轻婚纱', '目标：形成主力营收款']
  },
  {
    tag: '高毛利产品线',
    title: 'AI 精修增强 / 老照片修复',
    description: '不改人，重点提升清晰度、质感和放大能力，是最容易让客户直接付费的加购点。',
    bullets: ['对应产品：FLUX.2-Klein 高清修复', '适合：出册、挂画、低像素补救、老照片', '目标：做高毛利加购']
  },
  {
    tag: '业务扩展产品线',
    title: '商家视觉内容服务',
    description: '帮助门店从 C 端写真扩展到 B 端本地商家视觉服务，打开新的收入天花板。',
    bullets: ['对应产品：一键生成产品多角度场景专业摄影、全能图片 Pro', '适合：花店、饰品、婚庆、美甲、服装', '目标：扩展 B 端收入']
  }
];

const products = [
  {
    rank: 'S 级 · 必试',
    name: '全能图片 Pro',
    link: 'https://www.runninghub.cn/ai-detail/1991550248581603329',
    meta: ['全能图片', '约 635.4K 使用', '715 点赞', '2773 收藏', '成功率 91%', '平均 71s'],
    description: '最像影楼 AI 后期工厂底座的具体产品，可以承接图生图、文生图、海报图、发圈图、套系样张等多种任务。',
    uses: ['AI 轻写真', '写真多风格延展', '朋友圈图 / 海报图 / 样张生产'],
    packaging: ['门店主力营收款', 'AI 后期中台', '套餐升级引擎']
  },
  {
    rank: 'S 级 · 必试',
    name: '贴身品类换装（2509）',
    link: 'https://www.runninghub.cn/ai-detail/1990350901753901058',
    meta: ['服装展示', '9586 使用', '62 点赞', '735 收藏', '成功率 99%', '平均 236s'],
    description: '最适合做成交辅助的具体产品。适合让客户在正式下单前先看到婚纱、礼服、写真服装的预览效果。',
    uses: ['婚纱 / 礼服试样', '写真风格试看', '礼服馆联营试装图'],
    packaging: ['AI 试装预览卡', '婚纱 / 礼服风格预览', '咨询转化工具']
  },
  {
    rank: 'S 级 · 高毛利',
    name: 'FLUX.2-Klein 高清修复',
    link: 'https://www.runninghub.cn/ai-detail/2013556064565858306',
    meta: ['老照片修复', '高清放大', '6585 使用', '37 点赞', '304 收藏', '平均 47s'],
    description: '最适合直接卖钱的高毛利产品，重点提升人物清晰度、细节质感和出册放大能力。',
    uses: ['高清精修升级', '老照片修复', '放大出册 / 挂画'],
    packaging: ['AI 高清精修包', '8K 人像增强包', '老照片修复焕新版']
  },
  {
    rank: 'A 级 · B 端扩展',
    name: '一键生成产品多角度场景专业摄影',
    link: 'https://www.runninghub.cn/ai-detail/2026115899555586050',
    meta: ['物品摄影', '模特产品展示', '100 使用', '7 点赞', '31 收藏', '平均 105s'],
    description: '虽然平台热度不算高，但非常适合门店延展到本地商家产品图、活动图和社媒图服务。',
    uses: ['产品场景图', '本地商家视觉服务', '轻量商拍内容包'],
    packaging: ['商家 AI 视觉包', '轻量商拍内容包', '月度商家内容服务']
  },
  {
    rank: 'A 级 · 营销模板',
    name: '三宫格电影氛围感写真（又是一年冬）',
    link: 'https://www.runninghub.cn/ai-detail/1982060072979308545',
    meta: ['人像写真', '场景道具', '3950 使用', '79 点赞', '281 收藏'],
    description: '更适合作为门店营销型写真模板，用来做主题活动、社媒传播和轻交付产品。',
    uses: ['节日写真', '三宫格传播图', '门店引流模板'],
    packaging: ['AI 主题写真', '朋友圈传播款', '小红书视觉模板']
  }
];

const moats = [
  {
    title: '套餐设计能力',
    text: '同样的工作流，能不能被包装成引流款、主力款、加购款、B 端款，决定了商业价值。'
  },
  {
    title: '交付稳定性',
    text: '客户不关心你怎么跑图，客户关心像不像本人、能不能发圈、能不能出册。'
  },
  {
    title: '销售转化话术',
    text: '换装预览和风格预览最强的地方不是图，而是成交辅助。'
  },
  {
    title: '本地案例密度',
    text: '一旦积累第一批真实案例，后续会越来越像一个可复制的本地服务生意。'
  }
];

const risks = [
  {
    title: '沉迷工作流，不做产品化',
    text: '如果团队一直研究哪个流更酷，而不是客户为什么愿意付钱，最后只会变成展示项目。'
  },
  {
    title: '生成效果不稳定',
    text: '脸部、手部、服装边缘、多图一致性都需要人工筛选和质检，不能幻想纯自动。'
  },
  {
    title: '前端表达错位',
    text: '对外不能卖“RunningHub 工作流”，要卖“更省时间、更高颜值、更适合传播的服务”。'
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

function renderProducts() {
  const container = document.getElementById('productGrid');
  container.innerHTML = products.map(product => `
    <article class="product-card">
      <div class="product-top">
        <div>
          <div class="product-rank">${product.rank}</div>
          <h3>${product.name}</h3>
        </div>
        <a class="product-link" href="${product.link}" target="_blank" rel="noreferrer">打开产品 ↗</a>
      </div>
      <div class="product-meta">
        ${product.meta.map(item => `<span>${item}</span>`).join('')}
      </div>
      <p>${product.description}</p>
      <div>
        <strong>适合用途</strong>
        <ul>${product.uses.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
      <div>
        <strong>建议包装</strong>
        <div class="product-bottom">
          ${product.packaging.map(item => `<span class="pill">${item}</span>`).join('')}
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
renderProducts();
renderStackList('moatList', moats, 'tone-positive');
renderStackList('riskList', risks, 'tone-warning');
