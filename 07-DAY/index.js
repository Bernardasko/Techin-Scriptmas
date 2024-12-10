
function formatNumber(phoneNumber) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1)-$2-$3');
}

let output = formatNumber("8005551212");
console.log(output);
