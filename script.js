//your JS code here. If required.
const blocks = document.getSelectorAll(".grid-box");
const blockId = document.getElementById("block_id");
const colourId = document.getElementById("colour_id")
const changeButton = document.getElementById("change_button")
const resetButton = document.getElementById("Reset")


changeButton.addEventListener("click", function (){
	blocks.forEach(function (block){
		block.style.backgroundColor = "transparent";
	});
	const id = parseInt(blockedId.value);

	if(id >= 1&& id <= 9){
		block[id -1].style.backgroundColor = colourId.value;
	}
})

resetButton.addEventListener("click", function (){	
	blocks.forEach(function (block){
		block.style.backgroundColor = "transparent";
	});
	
});




