module.exports = function toReadable(number) {
    const numbers = [
        {
            0: "zero",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine"
        },
        {
            1: "ten",
            2: "twenty",
            3: "thirty",
            4: "forty",
            5: "fifty",
            6: "sixty",
            7: "seventy",
            8: "eighty",
            9: "ninety"
        },
        {
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: "eighteen",
            19: "nineteen"
        }
    ]
    number = number.toString();
    let string = "";

    switch (number.length) {
        case 1:
            string += numbers[0][number];
            break;

        case 2:
            if (number[1] == "0") {
                string += numbers[1][number[0]];
            } else if (Object.keys(numbers[2]).includes(number)) {
                string += numbers[2][number];
            } else {
                string += `${numbers[1][number[0]]} ${numbers[0][number[1]]}`;
            }
            break;

        case 3:
            const num = number[1] + number[2];
            string += `${numbers[0][number[0]]} hundred`;

            if (num == "00") {
                break;
            } else {
                if (number[1] == "0") {
                    string += ` ${numbers[0][number[2]]}`;
                }
                else if (Object.keys(numbers[2]).includes(num)) {
                    string += ` ${numbers[2][num]}`;
                }
                else if (number[2] == "0") {
                    string += ` ${numbers[1][number[1]]}`;
                }
                else {
                    string += ` ${numbers[1][number[1]]} ${numbers[0][number[2]]}`;
                }
            }
            break;
    }
    return string
}