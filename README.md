# 🎨 Portfolio Website

개인 포트폴리오 웹사이트입니다.  [링크](https://enddl3788.github.io/portfolio/)

웹 디자인, 프로젝트, 블로그, 자기소개 등을 소개하는 정적 웹사이트입니다.

---

## 📌 프로젝트 개요

- **목표**: 웹 기반의 자기소개 및 프로젝트 소개
- **기술 스택**:  
  - HTML5, CSS3 (Flexbox, Animation)
  - JavaScript (DOM 조작 및 사용자 인터랙션)
  - Bootstrap

---

## 🗂️ 폴더 구조

```
/portfolio
│
├── index.html # 메인 페이지
│
├── /img # 이미지 파일
│ └── /project # 프로젝트 이미지 파일
│
├── /css
│ ├── default.css # 기본 스타일 (reset, root 변수 등)
│ ├── main.css # 공통 레이아웃 및 UI
│ ├── animation.css # 애니메이션 관련 스타일
│ ├── components.css # 재사용 UI 컴포넌트
│ └── about.css # 특정 페이지 전용 스타일
│
├── /js
│ ├── main.js # 초기화 스크립트
│ ├── tabScroll.js # 탭 스크롤 관련
│ ├── sectionControl.js # 섹션 펼치기/토글 기능
│ ├── blogDetail.js # 블로그 상세보기 기능
│ └── searchControl.js # 검색 입력 제어
│
└── README.md # 프로젝트 설명 문서
```

---

## ✨ 주요 기능

- 상단 네비게이션 탭 스크롤 기능
- 로고 클릭 시 모든 탭 섹션 펼치기
- 각 탭 클릭 시 해당 콘텐츠만 보이도록 제어
- 블로그 프리뷰 → 상세 콘텐츠 전환
- 검색창 입력 제한 (예: "송예빈")
- 마퀴(Marquee) 애니메이션 콘텐츠

---

## 💡 개발 계획 / TODO

- [ ] 반응형 레이아웃 적용 (모바일 최적화)
- [ ] SEO 태그 추가 (Open Graph, meta)
- [ ] 애니메이션 최적화 (prefers-reduced-motion 고려)
- [ ] 다국어 지원 고려
