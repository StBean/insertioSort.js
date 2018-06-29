function InsertionSort(data){
	for(var i = 0; i < data.length - 1; i++){
		var min = i; 
		for(var j = i + 1; j < (data.length); j++){
			if(data[j] < data[min]){
				min = j;
			}
			var temp = data[i];
			data[i] = data[min];
			data[min] = temp;
		}
	}
	return data;
};
