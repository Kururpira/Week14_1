
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');
const result5 = document.getElementById('result5');
const result6 = document.getElementById('result6');


let length = 12;
const min = 1;
const max = 99;
const grades = [...Array(length)];
for (let i = 0; i < grades.length; i += 1) { 
    grades[i] = Math.ceil( Math.random(min, max) * 100); 
}
console.log(grades); 

const gradesCopy =Array.from(grades);
const getAverage = (gradesCopy) => {
    const sum = gradesCopy.reduce((acc, number) => acc + number, 0);
    let length = gradesCopy.length;
    return Math.ceil(sum / length);
};
console.log(getAverage(gradesCopy));

const maxValueRating = Math.max(...grades);
console.log(maxValueRating);

const minValue = Math.min(...grades);
console.log(minValue);

let filteredMaxValue = grades.filter(el=>el >= 60);
filteredMaxValue = filteredMaxValue.length;
console.log(filteredMaxValue);

let filteredMinValue = grades.filter(el=>el <= 59);
filteredMinValue = filteredMinValue.length;
console.log(filteredMinValue);



for (let i = 0; i < grades.length; i++) {
if (grades[i] > 60) {
    grades[i] = 'A';
}
else if (grades[i] > 50 && grades[i] <= 59 ) {
    grades[i] = 'B';
}
else if (grades[i] > 40 && grades[i] <= 49 ) {
    grades[i] = 'C';
}
else if (grades[i] > 30 && grades[i] <= 39 ) {
    grades[i] = 'D';
}
else  {
    grades[i] = 'E';
}
}
console.log(grades);

result.textContent =` Средний балл у студентов: ${getAverage(gradesCopy)}`;
result2.textContent =` Максимальный балл у студентов: ${maxValueRating}`;
result3.textContent =` Минимальный балл у студентов: ${minValue}`;
result4.textContent =` Количество студентов с положительной оценкой: ${filteredMaxValue}`;
result5.textContent =` Количество студентов с отрицательной оценкой: ${filteredMinValue}`;
result6.textContent =` Все оценки студентов: ${grades}`;