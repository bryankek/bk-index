var url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRfZ0pGUkVbBDJXPjUQW9zlepN3umSTRnzlsYmPwqCSYbqmBxV8MUbLIWlLLHaMa1MOKOxBAw5qCYIN/pub?gid=136460966&single=true&output=csv";
var resdata = null;
function CreateTableFromJSON(res) {
        var myBooks = res;
        var col = [];
        for (var i = 0; i < myBooks.length; i++) {
            for (var key in myBooks[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        };

        var table = document.createElement("table");


        var tr = table.insertRow(-1);           

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            tr.appendChild(th);
        };

        for (var i = 0; i < myBooks.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = myBooks[i][col[j]];
            }
        };

        var divContainer = document.getElementById("cont");
	console.log(divContainer);
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
    };	
	
	Papa.parse(gsurl, {
	download: true,
	complete: function(results) {
		console.log(results);
    		var arrayToString = JSON.stringify(Object.assign({}, results.data));
    		var stringToJsonObject = JSON.parse(arrayToString);
		resdata = stringToJsonObject;	
	}
});
