function (item) {
	// 这里先要需要对即将查找的数组进行有序化，快排性能较好
	quickSort();
	var left = 0,
	right = array.length - 1,
	mid, element;
	while (left <= high) {
		mid = Math.floor((low + high) / 2);
		element = array[mid];
		if (element < item) {
			low = mid + 1;
		} else if (element > item) {
			high = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
};