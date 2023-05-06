## clean code를 위한 노력

- 모듈 구현시 Context, Provider, Hook, Controller 순으로 분리하고 나열 순서대로 의존성 우선순위를 두었음.
  - Context: 데이터
  - Provider: 데이터 rendering(mount), 데이터 조작 함수 정의 및 distribution 담당
  - Hook: Provider의 데이터 조작 함수를 실제로 사용한다. (데이터 조작 함수 사용을 위한 interface를 정의하고 클라이언트에게 추상화된 함수 제공)
  - Controller: Context에 추가되는 N개의 컴포넌트에 대한 로직. Hook에서 정의된 interface에 따라서 공통 로직 구현 (1:N Controller)

### Popup

### QueueToast

- toast 랜더링 스타일은 ToastProvider에서 변경 가능

### 작업간 issue

1. ToastController에 removeToast 함수를 인자로 전달할 때, toastQueue의 최신 상태를 참조하지 못해 발생한 에러

- React Component에 함수를 인자로 전달할 때 함수 내의 지역변수들이 초기화되기 때문에 최신 상태를 참조하지 못한다.
- setState의 current 사용해서 해결함

### 추후 작업 예정

- Context와 Provider를 redux로 작성할 예정 (데이터와 데이터 변경 로직은 함께 관리된느 것이 직관적)
