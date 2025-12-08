
//#region Part 5

// Task 1

const recursivePow = (number, power) => {
    if (power === 0) {
        return 1;
    }

    if (power > 0) {
        return number * recursivePow(number, power - 1);
    }
    else {
        return 1 / (number * recursivePow(number, Math.abs(power) - 1));
    }
}

const fibonacci = (index, sequence = [0, 1]) => {
    if (index <= 0) {
        return [0];
    }
    if (index === 1) {
        return [0, 1];
    }

    const length = sequence.length;

    if (length > index) {
        return sequence;
    }

    sequence.push(sequence[length - 1] + sequence[length - 2]);

    return fib(index, sequence);
}

const gcd = (num1, num2) => {
    if (num2 === 0) {
        return num1;
    }
    return gcd(num2, num1 % num2);
}




// Task 2

const companyTree = {
    name: "Иванов И.И.",
    job: "Ген. Дир",
    subordinates: [
        {
            name: "Петров П.П.",
            job: "Тимлид",
            department: "Bigdata",
            subordinates: [
                {
                    name: "Денисов Д.Д.",
                    job: "Программист"
                }
            ]
        },
        {
            name: "Егоров Е.Е.",
            job: "Тимлид",
            department: "Gamedev",
            subordinates: [
                {
                    name: "Николаев Н.Н.",
                    job: "Программист"
                },
                {
                    name: "Владимиров В.В.",
                    job: "Дизайнер"
                }
            ]
        },
        {
            name: "Даниилов Д.Д.",
            job: "Тимлид",
            department: "Web",
            subordinates: [
                {
                    name: "Игорев И.И.",
                    job: "Программист"
                },
                {
                    name: "Сергеев С.С.",
                    job: "Дизайнер"
                }
            ]
        },

    ]
}

const lookup = (employee, filter) => {
    let result = [];

    for (let subordinate of employee.subordinates) {
        const filtered = filter(subordinate);
        if (filtered) result.push(filtered);

        if (subordinate.subordinates !== undefined) {
            const subResult = lookup(subordinate, filter);
            result = result.concat(subResult);
        }
    }
    return result;
}


// Test

const teamLeaders = lookup(companyTree, (employee) => {
    if (employee.job === "Тимлид") {
        return employee;
    }
})

const designers = lookup(companyTree, (employee) => {
    if (employee.job === "Дизайнер") {
        return employee;
    }
})
const programmers = lookup(companyTree, (employee) => {
    if (employee.job === "Программист") {
        return employee;
    }
})

//#endregion