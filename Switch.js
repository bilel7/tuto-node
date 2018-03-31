var quantity = 1,
    unit = 'M',
    result;
if (unit === 'K') {
    result = 1024 * quantity;
} else if (unit === 'M') {
    result = 1024 * 1024 * quantity;
} else if (unit === 'G') {
    result = 1024 * 1024 * 1024 * quantity;
} else if (unit === 'T') {
    result = 1024 * 1024 * 1024 * 1024 * quantity;
} else {
    result = false;
}

console.log(result);

switch (unit) {
    case 'K':
        result = 1024 * quantity;
        break;
    case 'M':
        result = 1024 * 1024 * quantity;
        break;
    case 'G':
        result = 1024 * 1024 * 1024 * quantity;
        break;
    case 'T':
        result = 1024 * 1024 * 1024 * 1024 * quantity;
        break;
    default:
        result = false;
}

console.log(result);
