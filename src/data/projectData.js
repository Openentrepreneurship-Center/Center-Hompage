// 현재 수행 중인 6개 프로젝트 (카드 표시)
export const projects = [
  {
    key: 'hippo',
    tag: '히포크랏랩스',
    title: '병원 진료기록 Visualization AI 모듈 개발',
    desc: '히포크랏랩스와 함께 개발하는 병원 진료기록 자동 시각화 AI 모듈. 의료진 업무 효율성 극대화',
    image: '/ppt-images/image17.jpg',
    period: '2025.08 ~ 수행 중',
    tech: [
      { icon: 'fas fa-heartbeat', label: 'Medical AI' },
      { icon: 'fas fa-chart-bar', label: 'Visualization' },
      { icon: 'fas fa-brain', label: 'NLP' },
    ],
    modalDescription:
      '히포크랏랩스와 공동 개발하는 병원 진료기록 Visualization AI 모듈입니다. 의사가 작성한 비정형 진료기록을 AI가 자동으로 분석·구조화하여 직관적인 시각적 형태로 변환합니다. 자연어 처리와 의료 도메인 지식을 결합하여 의료진의 업무 효율성을 극대화하고 환자 케어의 질을 높이는 것을 목표로 합니다.',
    aosDelay: '',
  },
  {
    key: 'lgcns_impact',
    tag: 'LG CNS',
    title: 'Agentic AI Impact 모델 연구 및 개발',
    desc: 'LG CNS와 공동 수행하는 Agentic AI의 기업 업무 임팩트 측정 모델 연구·개발',
    image: '/ppt-images/image16-cropped.jpg',
    period: '2026.01 ~ 수행 중',
    tech: [
      { icon: 'fas fa-robot', label: 'Agentic AI' },
      { icon: 'fas fa-chart-line', label: 'Impact Model' },
      { icon: 'fas fa-microscope', label: 'AI Research' },
    ],
    modalDescription:
      'LG CNS와 공동으로 Agentic AI 시스템이 기업 업무에 미치는 실질적 임팩트를 정량화하는 모델을 연구·개발합니다. AI 에이전트가 실제 업무 생산성·효율성·품질에 미치는 영향을 체계적으로 측정하고, 기업의 AI 도입 의사결정에 실질적 근거를 제공하는 방법론을 개발합니다.',
    aosDelay: '100',
  },
  {
    key: 'degrim',
    tag: '더그림엔터테인먼트',
    title: '웹툰 멀티모달형 데이터 생성 MCP 오토메이션 시스템',
    desc: '더그림엔터테인먼트와 함께 개발하는 웹툰 IP 기반 멀티모달 데이터 생성 자동화 시스템',
    image: '/ppt-images/image15.jpg',
    period: '2025.09 ~ 수행 중',
    tech: [
      { icon: 'fas fa-magic', label: 'Multimodal AI' },
      { icon: 'fas fa-cogs', label: 'MCP Automation' },
      { icon: 'fas fa-images', label: 'Data Generation' },
    ],
    modalDescription:
      '더그림엔터테인먼트와 협력하여 개발하는 웹툰 IP 기반 멀티모달형 데이터 생성 MCP(Model Context Protocol) 오토메이션 시스템입니다. 웹툰 콘텐츠로부터 다양한 형식의 학습 데이터를 자동으로 생성·가공하여 AI 모델 훈련에 활용할 수 있는 파이프라인을 구축합니다.',
    aosDelay: '200',
  },
  {
    key: 'mobility',
    tag: '부엉이들',
    title: 'AI 기반 모빌리티 운행자성 및 잔존가치 평가 솔루션',
    desc: '부엉이들과 개발하는 전기 모빌리티 AI 운행 특성 분석 및 잔존가치 예측 솔루션',
    image: '/ppt-images/image9.jpg',
    period: '2025.06 ~ 수행 중',
    tech: [
      { icon: 'fas fa-motorcycle', label: 'Mobility AI' },
      { icon: 'fas fa-tachometer-alt', label: 'Prediction' },
      { icon: 'fas fa-battery-three-quarters', label: 'Battery Analytics' },
    ],
    modalDescription:
      '부엉이들과 공동 개발하는 AI 기반 모빌리티 운행자성 분석 및 잔존가치 평가 솔루션입니다. 전기 오토바이·모빌리티 기기의 실시간 운행 데이터를 AI로 분석하여 운행 패턴 특성을 파악하고, 배터리 및 기기의 잔존 가치를 정밀 예측합니다. 중고 모빌리티 시장의 가격 투명성과 신뢰성을 높이는 것을 목표로 합니다.',
    aosDelay: '300',
  },
  {
    key: 'stepi',
    tag: 'STEPI',
    title: '입사지원자 직무적합성 평가용 Agentic AI 시스템 개발',
    desc: '과학기술정책연구원 STEPI의 입사지원자 직무적합성 자동 평가 Agentic AI 시스템',
    image: '/ppt-images/image14.jpg',
    period: '2026.02 ~ 수행 중',
    tech: [
      { icon: 'fas fa-robot', label: 'Agentic AI' },
      { icon: 'fas fa-user-check', label: 'HR Assessment' },
      { icon: 'fas fa-building', label: '공공기관' },
    ],
    modalDescription:
      '과학기술정책연구원(STEPI)의 입사지원자 직무적합성 평가를 자동화하는 Agentic AI 시스템을 개발합니다. 지원서·자기소개서 등 다양한 지원 자료를 AI 에이전트가 종합 분석하여 직무별 적합성을 객관적으로 평가합니다. 공공기관 채용 프로세스의 공정성과 효율성을 동시에 높이는 것을 목표로 합니다.',
    aosDelay: '400',
  },
  {
    key: 'lgcns_hotl',
    tag: 'LG CNS',
    title: 'HOTL 업무 생산성 관리 자동화 솔루션 개발',
    desc: 'LG CNS의 Human-on-the-Loop 기반 업무 생산성 자동화 관리 솔루션 개발',
    image: '/ppt-images/image8.jpg',
    period: '2026.01 ~ 수행 중',
    tech: [
      { icon: 'fas fa-sync-alt', label: 'HOTL' },
      { icon: 'fas fa-chart-line', label: 'Productivity' },
      { icon: 'fas fa-cogs', label: 'Automation' },
    ],
    modalDescription:
      'LG CNS와 공동 개발하는 Human-on-the-Loop(HOTL) 기반 업무 생산성 자동화 관리 솔루션입니다. AI가 업무 흐름을 모니터링하고 자동화 기회를 식별하며, 사람이 핵심 판단 포인트에만 개입하는 HOTL 패러다임을 구현합니다. AI 지원도구의 생산성 측정과 자동화 관리를 통합한 엔터프라이즈 솔루션입니다.',
    aosDelay: '500',
  },
]

// 전체 Key References (16개) — 수행 중 최신순 → 완료 최신순
export const allReferences = [
  // ── 수행 중 (시작일 최신순) ──────────────────────────────────────────
  { type: '공공기관', company: 'STEPI',               title: 'STEPI 입사지원자 직무적합성 평가용 Agentic AI 시스템 개발',           period: '2026.02 ~ 수행 중',  active: true  },
  { type: '대기업',   company: 'LG CNS',             title: 'HOTL 업무 생산성 관리 자동화 솔루션 개발',                            period: '2026.01 ~ 수행 중',  active: true  },
  { type: '대기업',   company: 'LG CNS',             title: 'Agentic AI Impact 모델 연구 및 개발',                                period: '2026.01 ~ 수행 중',  active: true  },
  { type: '스타트업', company: '더그림 엔터.',         title: '웹툰 멀티모달형 데이터 생성 MCP 오토메이션 시스템 개발',               period: '2025.09 ~ 수행 중',  active: true  },
  { type: '스타트업', company: '히포크랏랩스',        title: '병원 진료기록 Visualization AI 모듈 개발',                           period: '2025.08 ~ 수행 중',  active: true  },
  { type: '스타트업', company: '부엉이들',             title: 'AI 기반 모빌리티 운행자성 및 잔존가치 평가 솔루션 개발',               period: '2025.06 ~ 수행 중',  active: true  },
  // ── 완료 (시작일 최신순) ────────────────────────────────────────────
  { type: '대기업',   company: '현대모비스',        title: '멀티모달 AI 기반 스마트 캐빈 기술 기획',                              period: '2025.07 ~ 2025.10',  active: false },
  { type: '대기업',   company: 'LG CNS',             title: '인재 평가를 위한 sLLM 기반 Agentic AI 모듈 개발',                    period: '2024.12 ~ 2025.06',  active: false },
  { type: '대기업',   company: 'LG CNS',             title: 'LG CNS AI 지원도구 생산성 측정 솔루션 개발',                          period: '2024.11 ~ 2025.11',  active: false },
  { type: '스타트업', company: '인피버티',             title: '센서 기반 다차원적 데이터를 활용한 스마트팜 관리 AI 솔루션 개발',      period: '2024.10 ~ 2024.12',  active: false },
  { type: '스타트업', company: '퍼스트랩',            title: '다구간 초음파 나노 분산 장비를 이용한 제조 솔루션 개발',               period: '2024.04 ~ 2025.03',  active: false },
  { type: '중소기업', company: '파우컴퍼니',          title: '마케팅 리포트 자동 시각화 AI 시스템 개발',                            period: '2024.02 ~ 2025.02',  active: false },
  { type: '스타트업', company: '부엉이들',             title: '전기 오토바이 배터리 잔존가치 예측 AI 엔진 개발',                      period: '2024.02 ~ 2024.10',  active: false },
  { type: '스타트업', company: '위인터랙트',          title: '과학기술 연구자 인명 DB 구축을 통한 연구자 검색 시스템 개발',           period: '2023.10 ~ 2024.01',  active: false },
  { type: '중소기업', company: '청해 ENV',            title: 'CBD 추출 효율 개선 AI 시뮬레이션 툴 개발',                           period: '2023.03 ~ 2023.11',  active: false },
  { type: '스타트업', company: '보윙',               title: '노코드 인공지능 모델 데스크탑 어플리케이션 개발',                       period: '2022.09 ~ 2023.12',  active: false },
]

// 뉴스/프레스 아이템
export const newsItems = [
  { label: "26' 히포크랏랩스 AI 개발 MoU 체결",          year: '2026', icon: 'fas fa-handshake' },
  { label: "26' LG CNS AI 평가 솔루션 공동 개발 협약",    year: '2026', icon: 'fas fa-file-signature' },
  { label: "26' 국내외 AI 산업동향 인터뷰",               year: '2026', icon: 'fas fa-newspaper' },
  { label: "26' 더그림엔터테인먼트 AI 개발 MoU 체결",     year: '2026', icon: 'fas fa-handshake' },
  { label: "25' LG CNS AI 생산성 공동연구 언론 보도",     year: '2025', icon: 'fas fa-broadcast-tower' },
  { label: "25' 현대모비스 스마트 캐빈 AI 기술기획 수주", year: '2025', icon: 'fas fa-car' },
]
