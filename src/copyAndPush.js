const copyAndPush = (newArray, newItem) => {
    const newNewArray = newArray.push(newItem);
    return newNewArray
};


module.exports = {
    copyAndPush
};