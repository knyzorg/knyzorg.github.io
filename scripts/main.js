// Email Form
let elForm = document.querySelector("form")
elForm.addEventListener("submit", function (e) {
    let elements = this.querySelectorAll("input, textarea");
    let dataPairs = [...elements]
        .filter(c => c.name)
        .filter(c => !((c.type == "checkbox" || c.type == "radio") && !c.checked))
        .map(c => ({
            [c.name]: c.value
        }))

    let postData = dataPairs.reduce((a, b) => {
        return Object.assign(a, b);
    })

    var formData = new FormData();

    for (let key in postData) {
        formData.append(key, postData[key]);
    }

    fetch(this.action, {
        method: "POST",
        mode: 'no-cors',
        body: new URLSearchParams(formData)
    }).then(() => {
        this.parentElement.classList.add("submitted")
    })

    e.preventDefault();
})