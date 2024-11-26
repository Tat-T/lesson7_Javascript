const addBlockBtn = document.getElementById("add-block");
const palette = document.getElementById("palette");

addBlockBtn.addEventListener("click", e => {
    let newBlock = document.createElement("div");
    const color = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)
    ].join(",");
    newBlock.style.backgroundColor = `rgb(${color})`;
    newBlock.classList.add("block");
    newBlock.addEventListener("click", e => {
        newBlock.remove();
    });
    palette.append(newBlock);
})

// Задание 2

const colorText = document.querySelector(".color-text");
document.querySelector(".color-picker").addEventListener("click", e => {
    if (!e.target.classList.contains("color-block")) return;
    const colorBlock = e.target; // <div  ... data color="#000"><div>
    const color = colorBlock.dataset.color;// #000
    colorText.style.color = color;
});

// Задание 3

const commentsBoard = document.querySelector(".comments");
const commentForm = document.querySelector(".comment-form");
commentForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(commentForm);

    let usernameEl = document.createElement('h6');
    usernameEl.innerText = formData.get("username");
    let commentDate = document.createElement("p");
    const d = new Date();
    commentDate.innerText = d.toLocaleDateString('ru-Ru');
    let commentEl = document.createElement('p');
    commentEl.innerText = formData.get("comment");

    let commentBlock = document.createElement("div");
    commentBlock.append(usernameEl, commentDate, commentEl);

    commentsBoard.append(commentBlock);

});
