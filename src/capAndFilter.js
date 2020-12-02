const capitalizeAndFilter = filteredNames => {
    const nameArray = [];

    filteredNames.map(item => {
        const newItem = item.toUpperCase();

        if (newItem.startsWith('F')) {
            return;
        } else {
            nameArray.push(newItem);
        }
    })
    return nameArray;
}
module.exports = {
    capitalizeAndFilter
}