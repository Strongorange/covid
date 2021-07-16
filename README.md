https://api.covid19api.com/

Content 컴포넌트에서 api 문서를 참조해서 우리나라의 데이터를 가져오는데
컴포넌트가 마운트 되었을때 axios 를 사용하기 위해서 useEffect 를 사용
async await 를 사용해서 비동기적으로 요청해야함

react chart.js 를 사용해서 차트를 사용할 수 있음
npm i react-chartjs-2
https://www.chartjs.org/docs/latest/

https://www.youtube.com/watch?v=DtLhiMxgsm0

reduce 를 사용해서 axios 에서 받아온 데이터에서 각 월의 마지막 데이터만 사용하게 필터
reduce 에 대한 강의도 채널에있음

useEffect 에서 dependency 를 확인해서 요청이 여러번 수행되는 것을 방지

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Contents 에서 findItem 는 처음에 acc 에 빈 배열, 월, 년이 바뀔때 undefined 됨
이외에는 acc 에는 월별로 객체가 쌓임 [{1월} {2월} {3월} ....]
const findItem = acc.find((a) => a.year === year && a.month === month); 로 정의된 findItem 를 수정하면
acc [] 안의 값이 바뀜
즉 findItem 이 존재하고 .date < date 조건문에서 findItem.active = active 라는 것은 acc 안의 한 객체의 값을 수정하는 개념임!!!!!!!!!!!!!

!!!!!!!!!!!!!!!!!!!!!!!
https://webaura.tistory.com/entry/Reactjs-%EB%B6%80%EB%AA%A8%EC%97%90%EC%84%9C-%EC%9E%90%EC%8B%9D-%EC%9E%90%EC%8B%9D%EC%97%90%EC%84%9C-%EB%B6%80%EB%AA%A8-%EA%B0%92-%EC%A0%84%EB%8B%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95-props-function
자식에서 부모로 상태 보내기!!!
