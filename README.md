# miniproject02-hanetour-renewer

##✈️ Hana Tour Renewal Project
사용자 중심의 직관적인 UI와 효율적인 상품 탐색 기능을 제공하는 하나투어 리뉴얼 프로젝트입니다.

##✨ 핵심 기능 (Key Features)
칩 필터 기반의 상품 검색: 칩(Chip) 형태의 필터 기능을 상품 검색에 적용하여, 사용자가 원하는 키워드의 제품 추천 탭에 더 빠르고 쉽게 접근할 수 있도록 구현했습니다.

간결한 상품 정보 제공: 복잡한 여행 상품 정보를 구조화하여 사용자가 한눈에 핵심 정보를 파악하고 편리하게 확인할 수 있도록 디자인했습니다.

컴포넌트 기반 아키텍처: 메인 페이지를 다수의 섹션(sec01~sec06)으로 세분화하여 유지보수성을 높이고, 독립적인 컴포넌트 단위로 개발했습니다.

마이페이지 및 장바구니: 관심 상품을 관리할 수 있는 CartTable과 사용자 편의를 위한 Pagination 기능을 포함한 마이페이지를 구축했습니다.

##🛠 기술 스택 (Tech Stack)
Frontend: React (Vite), JavaScript

Styling: CSS3

State Management: Custom Hooks & Store (useManage.js)

Deployment: Vercel

##📂 프로젝트 구조 (Project Structure)
```Plaintext
src/
┣ components/
┃ ┣ common/ # Header(GNB, Search), Footer 등 공통 컴포넌트
┃ ┣ home/ # 메인 페이지 구성 섹션 (Visual, Banner, Sec01~06)
┃ ┣ mypage/ # CartTable, MyMenu, Pagination 등 마이페이지 컴포넌트
┃ ┗ card/ # 상품 정보 카드 공용 컴포넌트
┣ pages/
┃ ┣ Home/ # 메인 페이지 (Home.jsx)
┃ ┣ mypage/ # 마이페이지 (Mypage.jsx)
┃ ┗ [Category]/ # best, domestic, hotel, overseas 등 카테고리별 페이지
┣ hooks/ # usePagination 등 비즈니스 로직 커스텀 훅
┣ store/ # 전역 상태 관리 (useManage.js)
┣ App.jsx # 라우팅 및 전체 구조 설정
┗ main.jsx # 엔트리 포인트
```
##🚀 트러블슈팅 (Troubleshooting)
빌드 시 대소문자 경로 인식 오류 (Case Sensitivity)
문제: 로컬(Windows) 환경에서는 정상적으로 작동하던 코드가 Vercel(Linux) 배포 환경에서 Could not resolve "./pages/Home/home" 에러와 함께 빌드 실패.

원인: 운영체제별 파일 시스템의 대소문자 구분 방식 차이로 인해 발생한 문제.

해결: App.jsx 내의 import 경로와 실제 폴더/파일명의 대소문자를 일치하도록 수정하여 배포 이슈를 해결했습니다.

🔗 배포 링크
Live Demo: (https://mini2-hanatour.vercel.app/)
