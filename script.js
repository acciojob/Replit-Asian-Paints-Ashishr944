const blocks = document.querySelectorAll(".grid-box");

const blockId = document.getElementById("block_id");
const colourId = document.getElementById("colour_id");
const changeButton = document.getElementById("change_button");
const resetButton = document.getElementById("Reset");

changeButton.addEventListener("click", function () {
    // Reset all blocks first
    blocks.forEach(function (block) {
        block.style.backgroundColor = "transparent";
    });

    const id = parseInt(blockId.value);

    if (id >= 1 && id <= 9) {
        const selectedBlock = document.querySelector(
            '#grid-container .grid-box:nth-child(' + id + ')'
        );

        if (selectedBlock) {
            selectedBlock.style.backgroundColor = colourId.value;
        }
    }
});

resetButton.addEventListener("click", function () {
    blocks.forEach(function (block) {
        block.style.backgroundColor = "transparent";
    });
});