// ---- TASK 1 ----
// Main arrow function
const determineUserAge = () => {
    let age = prompt("Enter your age:", "<write age here>");

    if (age < 0 || age > 100) {
        alert("Error!!!\n" + "You enter wrong age!!!");
    } else if (age >= 60) {
        alert("You are a pensioner.");
    } else if (age >= 18) {
        alert("You are an adult.");
    } else if (age >= 12) {
        alert("You are a teenager.");
    } else {
        alert("Your are a child.");
    }
}

// ---- TASK 2 ----
// Main arrow function
const keyboardDigitChar = () => {
    let digit = prompt("Enter the digit(0 - 9):", "<write digit here>");

    if (0 <= digit && digit <= 9) {
        switch (Number(digit)) {
            case 0:
                alert("Char on the keyboard: [ ) ]");
                break;
            case 1:
                alert("Char on the keyboard: [ ! ]");
                break;
            case 2:
                alert("Char on the keyboard: [ @ ]");
                break;
            case 3:
                alert("Char on the keyboard: [ # ]");
                break;
            case 4:
                alert("Char on the keyboard: [ $ ]");
                break;
            case 5:
                alert("Char on the keyboard: [ % ]");
                break;
            case 6:
                alert("Char on the keyboard: [ ^ ]");
                break;
            case 7:
                alert("Char on the keyboard: [ & ]");
                break;
            case 8:
                alert("Char on the keyboard: [ * ]");
                break;
            case 9:
                alert("Char on the keyboard: [ ( ]");
                break;
            default:
                alert("Error!!!");
                break;
        }
    } else {
        alert("Error!!!\n" + "You enter wrong digit!!!");
    }
}

// ---- TASK 3 ----
// Main arrow function
const identicalNumbers = () => {
    let number = prompt("Input a three-digit number:", "<write number here>");
    if (number.toString().length == 3) {
        if (number[0] == number[1] ||
            number[1] == number[2] ||
            number[0] == number[1] == number[2]) {
            alert("There are identical digits in your number. :)");
        } else {
            alert("There are no identical digits in your number.");
        }
    }
    else {
        alert("Error!!!\n" + "You entered non three-digit number!!!");
    }
}

// ---- TASK 4 ----
// Main arrow function
const leapYear = () => {
    let year = prompt("Enter the year:", "<write year here>");

    switch(year) {
        case year > 0:
            let isLeap = (year % 4 == 0 && year % 100 !== 0) || (year % 400 === 0)     
            if (isLeap) {
                alert("The year is leap.")
            } else {
                alert("The year isn't leap.")
            }
            break;
        case year === 0:
            alert("Error!!!" + "\nThe year is equals to 0!!!")
            break
        case year < 0:
            alert("Error!!!" + "\nThe year is less than 0!!!")
            break
        default:
            alert("Error!!!" + "\nThe value isn't the number!!!")
            break
    }
}
// ---- TASK 5 ----
// Main arrow function
const palindromeNumber = () => {
    let number = prompt("Enter the five-digit number:", "<write number here>");

    if (number.length == 5) {
        let lastIndex = number.length - 1;
        for (let i = 0; i < number.length / 2; i++) {
            if (number[i] !== number[lastIndex - i]) {
                alert("The number isn't palindrome!!!");
                break;
            }
        } alert("The number is palindrome.");
    } else {
        alert("Wrong number!!!");
    }
}

// ---- TASK 6 ----
// Main arrow function
const moneyConverter = () => {
    let usd = prompt("Enter your money in usd:", "<write money here>");

    if (usd >= 0) {
        let usdInEur = 0.92;
        let usdInUah = 37.54;
        let usdInAzn = 1.7;

        let currency = prompt("Enter the currency(EUR, UAH, AZN) to convert your money:", "<write currency here>");
        currency = currency.toLowerCase();

        switch (currency) {
            case "eur":
                alert("USD in EUR: " + (usd * usdInEur));
                break;
            case "uah":
                alert("USD in UAH: " + (usd * usdInUah));
                break;
            case "azn":
                alert("USD in AZN: " + (usd * usdInAzn));
                break;
            default:
                alert("There aren't such currency.\n" + "We can convert your money only in EUR, UAH, AZN");
                break;
        }
    } else {
        alert("You enter amount of money less than 0!!!");
    }
}

// ---- TASK 7 ----
// Main arrow function
const purchaseDiscount = () => {
    let price = prompt("Enter the price of purchase: ", "<write price here>");

    let discountingPrice = 0;
    if (price >= 500) {
        discountingPrice = (price * 93) / 100;
        printText(discountingPrice);
    } else if (price >= 300) {
        discountingPrice = (price * 95) / 100;
        printText(discountingPrice);
    } else if (price >= 200) {
        discountingPrice = (price * 97) / 100;
        printText(discountingPrice);
    } else {
        alert("You haven't got any discount, because your purchase cost less than 200.");
    }
}
function printText(price) {
    alert("Discounting price of purchase: " + price);
}

// ---- TASK 8 ----
// Main arrow function
const circleInSquare = () => {
    let squarePerimetr = prompt("Enter the perimetr(sm) for square:", "<write perimetr here>");
    let circleLength = prompt("Enter the circle length(sm):", "<write length here>");

    if (squarePerimetr > 0 && circleLength > 0) {
        let sSide = squareSide(squarePerimetr);
        let cDiametr = circleDiametr(circleLength);
        if (sSide >= cDiametr) {
            alert("The circle can contains into the square." + "\nSquare side: " + sSide + "\n Circle diametr: " + cDiametr);
        } else {
            alert("The circle can't contains into the square.\n" + "Circle is larger than square!")
        }
    } else {
        alert("Error!!! \nYou enter wrong value!!!");
    }
}
function squareSide(P) {
    return P / 4;
}
function circleDiametr(l) {
    let R = l / (2 * Math.PI);
    return 2 * R;
}

// ---- TASK 9 ----
// Main arrow function
const questionsForUser = () => {
    let Answer_1 = prompt("Which animal has 2 legs, 2 wings and lays eggs?" +
        "\na) Dog\nb) Hen\nc) Tiger\nd) Elephant", "<write answer here>");

    let Answer_2 = prompt("Which animal has the longest neck among all the options given below?" +
        "\na) Tiger\nb) Giraffe\nc) Lion\nd) Cat", "<write answer here>");

    let Answer_3 = prompt("Which animal’s hair is used for making wool?" +
        "\na) Sheep\nb) Tiger\nc) Panda\nd) Kiwi", "<write answer here>");

    Answer_1 = Answer_1.toLowerCase();
    Answer_2 = Answer_2.toLowerCase();
    Answer_3 = Answer_3.toLowerCase();

    alert("Answer 1: " + answer_1(Answer_1) +
        "\nAnswer 2: " + answer_2(Answer_2) +
        "\nAnswer 3: " + answer_3(Answer_3)
    );
}
function answer_1(Answer_1) {
    if (Answer_1 == "hen") return true;
    return false;
}
function answer_2(Answer_2) {
    if (Answer_2 == "giraffe") return true;
    return false;
}
function answer_3(Answer_3) {
    if (Answer_3 == "sheep") return true;
    return false;
}


// ---- TASK 10 ----
// Main arrow function
const countDate = () => {
    let inputDate = prompt("Enter the date in format y.m.d (for example: 2024.01.20):", "<write date here>")

    let currentDate = new Date(inputDate)
    if(!isNaN(currentDate.getTime())) {
        // Get next data
        let nextDate = getNextDate(currentDate)
        alert("Next date: " + formatDate(nextDate))
    } else {
        alert("Error!!!" + "\nYou entered wrong values!!!")
    }
}

function getNextDate(currentDate) {
    let nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);

    // Checking if need to go to the next month
    if (nextDate.getMonth() > currentDate.getMonth() || (nextDate.getMonth() === 0 && currentDate.getMonth() === 11)) {

        // Checking if need to go to the next year
        if (nextDate.getFullYear() > currentDate.getFullYear()) {

            // Checking if the next year is leap
            if (isLeapYear(nextDate.getFullYear())) {

                // Add one day, because the year is leap
                nextDate.setDate(nextDate.getDate() + 1);
            }
        }
    }
    // All checks have been completed and returns next date
    return nextDate;
}
function isLeapYear(year) { // Сhecking whether the year is leap year
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function formatDate(date) {
    // Formating data in (day.month.year)
    var day = date.getDate();
    var month = date.getMonth() + 1; // Months starts from index 0. So must add 1
    var year = date.getFullYear();

    return (day < 10 ? '0' : '') + day + '.' + (month < 10 ? '0' : '') + month + '.' + year;
}

document.addEventListener("DOMContentLoaded", () => {
    // ---- TASK 1 ----
    // determineUserAge();

    // ---- TASK 2 ----
    // keyboardDigitChar();

    // ---- TASK 3 ----
    // identicalNumbers();

    // ---- TASK 4 ----
    // leapYear();

    // ---- TASK 5 ----
    // palindromeNumber();

    // ---- TASK 6 ----
    // moneyConverter();

    // ---- TASK 7 ----
    // purchaseDiscount();

    // ---- TASK 8 ----
    // circleInSquare();

    // ---- TASK 9 ----
    // questionsForUser();

    // ---- TASK 10 ---
    // countDate();
})