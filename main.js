let values = document.querySelectorAll('.values');
console.log(values)
let display = document.querySelector('.result');
let result = document.querySelector('#result');
let input = 0 ;
let remove = document.querySelector('#delete');
display.innerHTML = input
values.forEach(value => {
    value.onclick = function() {
        input += value.value;
        display.innerHTML = input;
    }
});
result.onclick = function () {
    display.innerHTML = eval(input)
}
remove.onclick = function() {
    input = 0;
    display.innerHTML = input;
}
