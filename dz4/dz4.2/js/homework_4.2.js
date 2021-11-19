const PHONE = ['Т', 'Е', 'Л', 'Е', 'Ф', 'О', 'Н'];

function reverse_phone(array) {
    for (let i = 0, j = array.length - 1; i < j; i++, j--)
        [array[i], array[j]] = [array[j], array[i]];
}


reverse_phone(PHONE);
console.log(PHONE.join(''));