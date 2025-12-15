function toGetMoney(age) {
    if (age > 18) {
        return 'আপনি ৫০ টাকা পাবেন'
    }
    else if (age === 11) {
        return 'ভাগ এখান থেকে'
    }
    else {
        return 'তুমি ২০ টাকা পাবে কারন তুই একটা বাচ্চা ছাগল'
    }
}

console.log(toGetMoney(14));
