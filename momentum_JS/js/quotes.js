const quotes = [
  {
    quote:
      '변명 중에서도 가장 어리석고 못난 변명은 ‘시간이 없어서’라는 변명이다.',
    author: '에디슨',
  },
  { quote: '삶이 있는 한 희망은 있다.', author: '키케로' },
  {
    quote:
      '누군가를 설득하기 전에 자신부터 설득하라 만일 자신을 설득하지 못하는 일이라면 그만 포기하라.',
    author: '에존 헨리 패터슨',
  },
  {
    quote: '끈기란 열아홉 번 실패해도 스무 번째 성공하는 것이다.',
    author: 'S.앤더슨',
  },
  {
    quote:
      '믿음이 있으면 산을 움직일 수 있으며, 불신은 자기 자신의 실존까지도 부인한다.',
    author: 'A.센베르크',
  },
  {
    quote:
      '인생이 끝날까 두려워하지 마라. 당신의 인생이 시작조차 하지 않을 수 있음을 두려워하라.',
    author: '그레이스 한센',
  },
  {
    quote:
      '벽돌이 쌓인다고 집이 되지 않듯이 시간이 쌓인다고 삶이 만들어지지 않는다.',
    author: '에리스 로럴드 미리에리',
  },
  {
    quote: '얕은 사람은 행운을 믿으며, 강한 사람은 원인과 결과를 믿는다.',
    author: '랄프 왈도 에머슨',
  },
  {
    quote: '남의 생활과 비교하지 말고 네 자신의 생활을 즐겨라.',
    author: '니콜라 드 콩도르세',
  },
  {
    quote: '자신감을 잃으면 그 순간 온 세상이 적이 된다.',
    author: '랠프 에머슨',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
