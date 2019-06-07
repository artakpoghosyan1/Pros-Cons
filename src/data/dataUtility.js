export function removeProsCons(prosCons, type, index) {
    const newArr = [...prosCons[type]];
    newArr.splice(index, 1);

    return {
        ...prosCons,
        [type]: newArr
    };
}


export function addProsCons(prosCons, type, item) {
    const newArr = [...prosCons[type]];
    newArr.push(item);

    return {
        ...prosCons,
        [type]: newArr
    };
}

export function updateProsConsItem(prosCons, type, index, newValue) {
    const newArr = [...prosCons[type]];
    newArr[index] = newValue;

    return {
        ...prosCons,
        [type]: newArr
    };
}
