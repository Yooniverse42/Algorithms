[원본](https://school.programmers.co.kr/learn/courses/30/lessons/120894)

### **문제 설명**

영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 `nums`가 매개변수로 주어질 때, `nums`를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

---

### 제한사항

- `nums`는 소문자로만 구성되어 있습니다.
- `nums`는 "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" 들이 공백 없이 조합되어 있습니다.
- 1 ≤ `nums`의 길이 ≤ 50
- "zero"는 `nums`의 맨 앞에 올 수 없습니다.

---

### 입출력 예

| nums                                   | result    |
| -------------------------------------- | --------- |
| "onetwothreefourfivesixseveneightnine" | 123456789 |
| "onefourzerosixseven"                  | 14067     |

---

### 입출력 예 설명

입출력 예 #1

- "onetwothreefourfivesixseveneightnine"를 숫자로 바꾼 123456789를 return합니다.

입출력 예 #1

- "onefourzerosixseven"를 숫자로 바꾼 14067를 return합니다.

```jsx
const solution = (nums) => {
  // do something
};

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
```
