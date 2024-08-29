function binarySearch(list, element) {
    let first = 0;
    let last = (list.length - 1);
    let center = (list.length / 2);

    while (first < last) {
        center = (first + last) / 2;
        if (element == list[center]) { return center }
        else if (element >= list[center]) { first = center + 1}
        else if (element <= list[center]) { last = center - 1}
    }
    return -1
}
