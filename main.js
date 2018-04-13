
// https://qiita.com/simiraaaa/items/2e7478d72f365aa48356
function execCopy(string){
	var temp = document.createElement('div');

	temp.appendChild(document.createElement('pre')).textContent = string;

	var s = temp.style;
	s.position = 'fixed';
	s.left = '-100%';

	document.body.appendChild(temp);
	document.getSelection().selectAllChildren(temp);

	var result = document.execCommand('copy');

	document.body.removeChild(temp);
	// true なら実行できている falseなら失敗か対応していないか

	return result;
}

function generateStr(ingredientStr, length){
	result = '';
	for(var i = length - 1; i > 0; i--){
		var index = Math.floor(Math.random() * ingredientStr.length);
		result += ingredientStr[index];
	}
	//console.log(result);
	return result;
}

function generate(ingredientStr){
	var div = document.createElement('div');
	var textarea = document.createElement('textarea');
	textarea.value = generateStr(ingredientStr, 15);
	textarea.addEventListener('click', function(){
		execCopy(textarea.value);
	});
	div.appendChild(textarea);
	resultArea.insertBefore(div, resultArea.firstChild);
}

var body = document.getElementById('body');
var resultArea = document.getElementById('result');
var ingredient = new Array(
	document.getElementById('ingredient0'),
	document.getElementById('ingredient1'),
	document.getElementById('ingredient2')
);

/*
for (var i = ingredient.length - 1; i >= 0; i--) {
	ingredient[i].addEventListener('click', function(){
		generateTextarea(ingredient[i].value);
	});
}
*/

ingredient[0].addEventListener('click', function(){
	generate(ingredient[0].value);
});
ingredient[1].addEventListener('click', function(){
	generate(ingredient[1].value);
});
ingredient[2].addEventListener('click', function(){
	generate(ingredient[2].value);
});
