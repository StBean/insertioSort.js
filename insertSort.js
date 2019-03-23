const insertSort = (data) => {
	for(let i = 1; i < data.length; i++){
		let j = i;
		while(data[j-1] > data[j] && j > 0){
			let temp = data[j];
			data[j] = data[j-1];
			data[j-1] = temp;
			j--;
		}
	}
	return data;
}
