#Print 사용법

print('hello world~')
print()
print()
print('빈 프린트는 줄바꿈을 의미한다.')


# # seperator 옵션
# 진짜 편하긴 하다 자바스크립트는 replace, trim을 이용해야하는데.
# 배열이라서 심지어 더 어렵지 않나? concat 메서드를 이용하여 하나로 만들고 공백을 없애고 해야함 ㅋㅋ
print('p', 'Y', 'T', 'H', 'o', 'n')
print('p', 'Y', 'T', 'H', 'o', 'n', sep=',')
print('p', 'Y', 'T', 'H', 'o', 'n', sep='')

# variable
a = 2
b = 3
c = a + b
print(c)