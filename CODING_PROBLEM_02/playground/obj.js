function getUserInfo(firstName, lastName, age) {
    const obj = {
      name: `${firstName} ${lastName}`,
      age,
    };

    return obj;
}
console.log(getUserInfo('Alice', 'Unkela', 26));