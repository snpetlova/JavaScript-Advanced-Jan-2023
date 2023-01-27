function calorieObject(arr) {

    let object = {};

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (i % 2 === 0) object[current] = Number(arr[i + 1]); 
    }

    return object;

}calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])