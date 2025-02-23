const check = (startIdx, discount, wantNum) => {
  for (let i = startIdx; i < startIdx + 10; i++) {
    wantNum[discount[i]]--;
  }
  if (Object.values(wantNum).some(el => el !== 0)) return false;
  return true;
};

function solution(want, number, discount) {
  var answer = 0;
  const wantNum = {};

  want.forEach((el, idx) => {
    wantNum[el] = number[idx];
  });

  for (let i = 0; i <= discount.length - 10; i++) {
    if (!wantNum[discount[i]]) continue;

    const result = check(i, discount, { ...wantNum });
    if (result) answer++;
  }

  return answer;
}

/*
일정 금액 지불 시, 10일간 회원 자격 부여.

회원 대상으로 매일 한가지 제품을 할인하는 행사함. 하루에 하나만 구매 가능.
원하는 제품과 수량이 할인하는 날짜와 10일 연속 일치하면 회원가입 할거임.

원하는 제품 want
want의 수량 number

제품의 배여 discount

제품 할인 받을 수 있는 모든 회원 등록 날짜의 일수
*/
