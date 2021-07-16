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
