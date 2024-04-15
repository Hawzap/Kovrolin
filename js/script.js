function checkPhoneKey(key) {
    return (
        (key >= "0" && key <= "9") ||
        key == "+" ||
        key == "(" ||
        key == ")" ||
        key == "-" ||
        key == "ArrowLeft" ||
        key == "ArrowRight" ||
        key == "Delete" ||
        key == "Backspace"
    );
}

function hasNonLetterChars(str) {
    return /[^a-zA-ZА-Яа-яёЁ\s\u2002-\u200A]/g.test(str);
}

function singleSelect(label, selectingBlock) {
    let selected = selectingBlock.querySelectorAll(".active");
    for (let elem of selected) {
        elem.classList.remove("active");
    }
    label.classList.add("active");
}

//pop-up start
const letBody = document.querySelector("body");
const openPopUp = document.querySelectorAll(".open-pop-up");
const closePopUp = document.querySelector(".close-pop-up");
const changeStylePopUp = document.querySelector(".popup-container");
const contentPopUp = document.querySelector(".popup-content");
const nameInput = document.querySelector(".name-pop-up");
const numberInput = document.querySelector(".number-pop-up");
const mailInput = document.querySelector(".mail-pop-up");
const button = document.querySelector(".send-info-pop-up");
const succsessful = document.querySelector(".sucsessful-form");
const repeat = document.querySelector(".repeat-pop-up");
const button2 = document.querySelector(".send-info");
const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

button2.addEventListener("click", (e) => {
    e.preventDefault();
});

openPopUp.forEach((e) => {
    e.addEventListener("click", function () {
        changeStylePopUp.style.opacity = "1";
        changeStylePopUp.style.visibility = "visible";
        letBody.style.overflow = "hidden";
        contentPopUp.classList.add("active");
    });
});

closePopUp.addEventListener("click", function () {
    changeStylePopUp.style.opacity = "0";
    changeStylePopUp.style.visibility = "hidden";
    letBody.style.overflow = "visible";
    contentPopUp.classList.remove("active");
});

nameInput.addEventListener("blur", function (e) {
    if (hasNonLetterChars(e.value)) {
        nameInput.classList.add("invalid");
    }
});

nameInput.addEventListener("focus", function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
    }
});

mailInput.addEventListener("blur", function () {
    let inputValue = mailInput.value.toLowerCase();
    if (!inputValue.includes("@gmail.com")) {
        mailInput.classList.add("invalid");
    }
});

mailInput.addEventListener("focus", function () {
    if (this.classList.contains("invalid")) {
        this.classList.remove("invalid");
    }
});

button.addEventListener("click", function (e) {
    e.preventDefault();
    if (
        !nameInput.classList.contains("invalid") &&
        !mailInput.classList.contains("invalid")
    ) {
        contentPopUp.style.opacity = "0";
        contentPopUp.style.visibility = "hidden";
        succsessful.classList.add("active");
    }
});

repeat.addEventListener("click", function () {
    succsessful.classList.remove("active");
    contentPopUp.style.opacity = "1";
    contentPopUp.style.visibility = "visible";
});

//pop-up end

//checked start

const selectingBlocks = document.querySelectorAll(".selectingBlock");
const resultBlocks = document.querySelectorAll(".item-of__results");

const label = document.querySelector(".label-radio");

selectingBlocks.forEach((container, i) => {
    container.addEventListener("click", (e) => {
        if (e.target.tagName != "LABEL") return;
        singleSelect(e.target, container);
        const selectingBlock = e.target.parentNode.parentNode;
        const containerImgURL = selectingBlock.querySelector(
            ".selectingBlock-img"
        ).src;
        const containerTitle =
            selectingBlock.querySelector(".headline-carpets").textContent;
        const resultImg = resultBlocks[i].children[1];
        const resultTitle = resultBlocks[i].children[2].children[1];

        resultImg.style.backgroundImage = `url(${containerImgURL})`;
        resultTitle.textContent = containerTitle;
    });
});

resultBlocks.forEach((e, i) => {
    const resultImg = e.children[1];
    const resultTitle = e.children[2].children[1];
    if (!resultImg.style.backgroundImage || !resultTitle.textContent) {
        const containerTitle =
            selectingBlocks[i].querySelector(".headline-carpets").textContent;
        const containerImgURL = selectingBlocks[i].querySelector(
            ".selectingBlock-img"
        )?.src;
        resultImg.style.backgroundImage = `url(${containerImgURL})`;
        resultTitle.textContent = containerTitle;
    }
});

//checked end

//change choice start

resultBlocks.forEach((element, i) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        selectingBlocks[i].scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
    });
});

// validation form

const validationForm = document.querySelectorAll(".validationForm");

validationForm.forEach((e) => {
    if (e.id == "name") {
        e.addEventListener("blur", function () {
            console.log("hello");
            if (hasNonLetterChars(e.value)) {
                e.classList.add("invalid");
            }
        });
    } else {
        e.addEventListener("blur", function () {
            let inputValue = e.value.toLowerCase();
            if (!inputValue.includes("@gmail.com")) {
                e.classList.add("invalid");
            }
        });
    }

    e.addEventListener("focus", function () {
        if (this.classList.contains("invalid")) {
            this.classList.remove("invalid");
        }
    });
});
