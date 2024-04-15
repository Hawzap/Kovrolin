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
    return /[^\p{L}\s]/g.test(str);
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

const container1 = document.querySelector(".gallery-flex");
const container2 = document.querySelector(".general");
const container3 = document.querySelector(".all-type");
const container4 = document.querySelector(".all-of__pic");
const container5 = document.querySelector(".all-edging");
const container6 = document.querySelector(".all-styling");

const choiceImg2 = document.querySelector(".img-of__result2");
const choiceSubTitle2 = document.querySelector(".text-result2");

const choiceImg3 = document.querySelector(".img-of__result3");
const choiceSubTitle3 = document.querySelector(".text-result3");

const choiceImg4 = document.querySelector(".img-of__result4");
const choiceSubTitle4 = document.querySelector(".text-result4");

const choiceImg5 = document.querySelector(".img-of__result5");
const choiceSubTitle5 = document.querySelector(".text-result5");

const choiceImg6 = document.querySelector(".img-of__result6");
const choiceSubTitle6 = document.querySelector(".text-result6");

const label = document.querySelector(".label-radio");

container1.onclick = function (event) {
    if (event.target.tagName != "LABEL") return;

    singleSelect1(event.target);
};

function singleSelect1(label) {
    let selected = container1.querySelectorAll(".active");
    for (let elem of selected) {
        elem.classList.remove("active");
    }
    label.classList.add("active");
}
//1 end

container2.onclick = function (event) {
    if (event.target.tagName != "LABEL") return;

    singleSelect2(event.target);
    if (event.target.classList.contains("pile__1")) {
        choiceImg2.style.backgroundImage = `url('img/pile.png')`;
        choiceSubTitle2.textContent = "Ворс Петлевой";
    }

    if (event.target.classList.contains("pile__2")) {
        choiceImg2.style.backgroundImage = `url(img/cut.png)`;
        choiceSubTitle2.textContent = "Ворс Разрезной";
    }

    if (event.target.classList.contains("pile__3")) {
        choiceImg2.style.backgroundImage = `url('img/combined.png')`;
        choiceSubTitle2.textContent = "Ворс комбинированный";
    }

    if (event.target.classList.contains("pile__4")) {
        choiceImg2.style.backgroundImage = `url(img/Velor.png)`;
        choiceSubTitle2.textContent = "Ворс велюр";
    }

    if (event.target.classList.contains("pile__5")) {
        choiceImg2.style.backgroundImage = `url(img/individual.png)`;
        choiceSubTitle2.textContent = "Ворс индивидуальный";
    }
};

function singleSelect2(label) {
    let selected = container2.querySelectorAll(".active");
    for (let elem of selected) {
        elem.classList.remove("active");
    }
    label.classList.add("active");
}

//2 end

container3.onclick = function (event) {
    if (event.target.tagName != "LABEL") return;
    singleSelect3(event.target);

    if (event.target.classList.contains("one-of__type1")) {
        choiceImg3.style.backgroundImage = `url(img/withsmth.png)`;
        choiceSubTitle3.textContent = "С подложкой";
    }

    if (event.target.classList.contains("one-of__type2")) {
        choiceImg3.style.backgroundImage = `url(img/withoutsmth.png)`;
        choiceSubTitle3.textContent = "без подложки";
    }
};

function singleSelect3(label) {
    let selected = container3.querySelectorAll(".active");
    for (let elem of selected) {
        elem.classList.remove("active");
    }
    label.classList.add("active");
}

//3 end

container4.onclick = function (event) {
    if (event.target.tagName != "LABEL") return;

    singleSelect4(event.target);

    if (event.target.classList.contains("one-of__pic_1")) {
        choiceImg4.style.backgroundImage = `url(img/withpic.png)`;
        choiceSubTitle4.textContent = "С рисунком";
    }

    if (event.target.classList.contains("one-of__pic_2")) {
        choiceImg4.style.backgroundImage = `url(img/withoutpic.png)`;
        choiceSubTitle4.textContent = "Без рисунка";
    }
};

function singleSelect4(label) {
    let selected = container4.querySelectorAll(".active");
    for (let elem of selected) {
        elem.classList.remove("active");
    }
    label.classList.add("active");
}

//4 end

container5.onclick = function (event) {
    if (event.target.tagName != "LABEL") return;

    singleSelect5(event.target);
    if (event.target.classList.contains("one-of__edging_1")) {
        choiceImg5.style.backgroundImage = `url('img/overlog.png')`;
        choiceSubTitle5.textContent = "Оверлог";
    }

    if (event.target.classList.contains("one-of__edging_2")) {
        choiceImg5.style.backgroundImage = `url('img/small.png')`;
        choiceSubTitle5.textContent = "кант маленький";
    }

    if (event.target.classList.contains("one-of__edging_3")) {
        choiceImg5.style.backgroundImage = `url('img/big.png')`;
        choiceSubTitle5.textContent = "кант большой";
    }

    if (event.target.classList.contains("one-of__edging_4")) {
        choiceImg5.style.backgroundImage = `url('img/for.png')`;
        choiceSubTitle5.textContent = "Под плинтус";
    }

    if (event.target.classList.contains("one-of__edging_5")) {
        choiceImg5.style.backgroundImage = `url('img/crai.png')`;
        choiceSubTitle5.textContent = "подгиб края";
    }
};

function singleSelect5(label) {
    let selected = container5.querySelectorAll(".active");
    for (let elem of selected) {
        elem.classList.remove("active");
    }
    label.classList.add("active");
}

container6.onclick = function (event) {
    if (event.target.tagName != "LABEL") return;

    singleSelect6(event.target);
    if (event.target.classList.contains("one-of__styling_1")) {
        choiceImg6.style.backgroundImage = `url('img/free.png')`;
        choiceSubTitle6.textContent = "Свободнолежащая";
    }

    if (event.target.classList.contains("one-of__styling_2")) {
        choiceImg6.style.backgroundImage = `url('img/glue.png')`;
        choiceSubTitle6.textContent = "На клей / фиксацию";
    }

    if (event.target.classList.contains("one-of__styling_3")) {
        choiceImg6.style.backgroundImage = `url('img/regulare.png')`;
        choiceSubTitle6.textContent = "на Гриппер рейку";
    }
};

function singleSelect6(label) {
    let selected = container6.querySelectorAll(".active");
    for (let elem of selected) {
        elem.classList.remove("active");
    }
    label.classList.add("active");
}

//checked end

//change choice start

const elem1 = document.querySelector(".elem1");
const elem2 = document.querySelector(".elem2");
const elem3 = document.querySelector(".elem3");
const elem4 = document.querySelector(".elem4");
const elem5 = document.querySelector(".elem5");
const elem6 = document.querySelector(".elem6");

elem1.onclick = function (e) {
    e.preventDefault();
    container1.scrollIntoView({ block: "center", behavior: "smooth" });
};

elem2.onclick = function (e) {
    e.preventDefault();
    container2.scrollIntoView({ block: "center", behavior: "smooth" });
};

elem3.onclick = function (e) {
    e.preventDefault();
    container3.scrollIntoView({ block: "center", behavior: "smooth" });
};

elem4.onclick = function (e) {
    e.preventDefault();
    container4.scrollIntoView({ block: "center", behavior: "smooth" });
};

elem5.onclick = function (e) {
    e.preventDefault();
    container5.scrollIntoView({ block: "center", behavior: "smooth" });
};

elem6.onclick = function (e) {
    e.preventDefault();
    container6.scrollIntoView({ block: "center", behavior: "smooth" });
};

// validation form

const validationForm = document.querySelectorAll(".validationForm");

validationForm.forEach((e) => {
    if (e.id == "name") {
        e.addEventListener("blur", function () {
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
