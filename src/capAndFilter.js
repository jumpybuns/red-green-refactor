const capitalizeAndFilter = filteredNames => {
    const nameArray = [];

    for (let i = 0; i < filteredNames.length; i++) {
        const item = filteredNames[i];
        const newItem = item.toUpperCase();

        if (newItem.startsWith('F')) {
            continue;
        } else {
            nameArray.push(newItem);
        }
    }
    return nameArray;

}


module.exports = {
    capitalizeAndFilter
}