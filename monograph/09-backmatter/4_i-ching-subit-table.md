# Таблиця відповідності гексаграм *І-Цзін* та SUBIT-координат

У цьому додатку наведено зіставлення 64 гексаграм *І-Цзін* із координатами системи SUBIT. Кодування виконано за каноном SUBIT:

- **WHO** (суб’єктна позиція) кодують **біти 1–2** (b1b2)  
- **WHERE** (просторова орієнтація) кодують **біти 3–4** (b3b4)  
- **WHEN** (часова фаза) кодують **біти 5–6** (b5b6)

Бінарні коди для кожної гексаграми (у порядку зліва направо: b1 – найнижча лінія, b6 – найвища) наведено в таблиці. Кожен біграм перекладається у відповідну координату за правилом:  
`10` → ME / EAST / SPRING  
`11` → WE / SOUTH / SUMMER  
`01` → YOU / WEST / AUTUMN  
`00` → THEY / NORTH / WINTER

| № | Назва (укр.) | Код (b1–b6) | SUBIT-ситуація (WHO × WHERE × WHEN) |
|---|--------------|-------------|-------------------------------------|
| 1 | Творчість | 111111 | WE × SOUTH × SUMMER |
| 2 | Виконання | 000000 | THEY × NORTH × WINTER |
| 3 | Труднощі на початку | 100010 | ME × NORTH × SPRING |
| 4 | Юність | 010001 | YOU × NORTH × AUTUMN |
| 5 | Очікування | 111010 | WE × EAST × SPRING |
| 6 | Позов | 010111 | YOU × WEST × SUMMER |
| 7 | Військо | 010000 | YOU × NORTH × WINTER |
| 8 | Єднання | 000010 | THEY × NORTH × SPRING |
| 9 | Малий випас | 111011 | WE × EAST × SUMMER |
| 10 | Хода | 110111 | WE × WEST × SUMMER |
| 11 | Затишок | 111000 | WE × EAST × WINTER |
| 12 | Застій | 000111 | THEY × WEST × SUMMER |
| 13 | Спільність людей | 101111 | ME × SOUTH × SUMMER |
| 14 | Володіння великим | 111101 | WE × SOUTH × AUTUMN |
| 15 | Скромність | 001000 | THEY × EAST × WINTER |
| 16 | Ентузіазм | 011000 | YOU × EAST × WINTER |
| 17 | Наслідування | 100110 | ME × WEST × SPRING |
| 18 | Виправлення | 011001 | YOU × EAST × AUTUMN |
| 19 | Наближення | 110000 | WE × NORTH × WINTER |
| 20 | Соглядання | 000011 | THEY × NORTH × SUMMER |
| 21 | Розкушування | 100101 | ME × WEST × AUTUMN |
| 22 | Краса | 101001 | ME × EAST × AUTUMN |
| 23 | Розпад | 000001 | THEY × NORTH × AUTUMN |
| 24 | Повернення | 100000 | ME × NORTH × WINTER |
| 25 | Невинність | 100111 | ME × WEST × SUMMER |
| 26 | Виховання | 111001 | WE × EAST × AUTUMN |
| 27 | Живлення | 100001 | ME × NORTH × AUTUMN |
| 28 | Перевага великого | 011110 | YOU × SOUTH × SPRING |
| 29 | Безодня | 010010 | YOU × NORTH × SPRING |
| 30 | Світло | 101101 | ME × SOUTH × AUTUMN |
| 31 | Взаємодія | 001110 | THEY × SOUTH × SPRING |
| 32 | Сталість | 011100 | YOU × SOUTH × WINTER |
| 33 | Відступ | 001111 | THEY × SOUTH × SUMMER |
| 34 | Міць великого | 111100 | WE × SOUTH × WINTER |
| 35 | Прогрес | 000101 | THEY × WEST × AUTUMN |
| 36 | Затемнення світла | 101000 | ME × EAST × WINTER |
| 37 | Родина | 101011 | ME × EAST × SUMMER |
| 38 | Протистояння | 110101 | WE × WEST × AUTUMN |
| 39 | Кульгавість | 001010 | THEY × EAST × SPRING |
| 40 | Звільнення | 010100 | YOU × WEST × WINTER |
| 41 | Зменшення | 110001 | WE × NORTH × AUTUMN |
| 42 | Примноження | 100011 | ME × NORTH × SUMMER |
| 43 | Прорив | 111110 | WE × SOUTH × SPRING |
| 44 | Зустріч | 011111 | YOU × SOUTH × SUMMER |
| 45 | Збирання | 000110 | THEY × WEST × SPRING |
| 46 | Підйом | 011000 | YOU × EAST × WINTER |
| 47 | Виснаження | 010110 | YOU × WEST × SPRING |
| 48 | Криниця | 011010 | YOU × EAST × SPRING |
| 49 | Революція | 101110 | ME × SOUTH × SPRING |
| 50 | Котел | 011101 | YOU × SOUTH × AUTUMN |
| 51 | Грім | 100100 | ME × WEST × WINTER |
| 52 | Перебування | 001001 | THEY × EAST × AUTUMN |
| 53 | Розвиток | 001011 | THEY × EAST × SUMMER |
| 54 | Розквіт | 110100 | WE × WEST × WINTER |
| 55 | Повнота | 101100 | ME × SOUTH × WINTER |
| 56 | Мандрівник | 001101 | THEY × SOUTH × AUTUMN |
| 57 | Проникнення | 011011 | YOU × EAST × SUMMER |
| 58 | Радість | 110110 | WE × WEST × SPRING |
| 59 | Розсіювання | 010011 | YOU × NORTH × SUMMER |
| 60 | Обмеження | 110010 | WE × NORTH × SPRING |
| 61 | Внутрішня правда | 110011 | WE × NORTH × SUMMER |
| 62 | Перевага малого | 001100 | THEY × SOUTH × WINTER |
| 63 | Вже кінець | 101010 | ME × EAST × SPRING |
| 64 | Ще не кінець | 010101 | YOU × WEST × AUTUMN |

**Пояснення:**  
Кожна SUBIT-ситуація обчислена за правилом: WHO = b1b2, WHERE = b3b4, WHEN = b5b6. Детальний опис усіх 64 архетипних ситуацій див. у розділі 3.2.
