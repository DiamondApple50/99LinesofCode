let friends = ['Will', 'Walker', 'Oxy', 'Cole', 'Tyler']

for (let index = 0; index < friends.length; index++) {
    loop(friends[index])
}

function loop(friends) {
    for (let index = 100; index > 0; index--) {
        if (index > 3) {
            console.log(index - 1 + ' lines of code in the file. ', index - 1 + ' lines of code.', friends + ' strikes one out, clears it out', index - 2 + ' lines of code in the file');

        } else if (index === 2) {
            console.log(index + ' lines of code in the file. ', index + ' lines of code.', friends + ' strikes one out, clears it out', index - 1 + ' line of code in the file');

        } else if (index === 1) {
            console.log(index + ' line of code in the file. ', index + ' line of code.', friends + ' strikes one out, clears it out.', index - 1 + ' lines of code in the file');

        } else if (index === 0) {
            break
        }
    }
}

