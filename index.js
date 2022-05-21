const ent = document.querySelector('#ent');
const exit = document.querySelector('#exit');
const result = document.querySelector('.result');

exit.disabled = true

let entTime;
let exitTime;

ent.addEventListener('click', () => {
    ent.disabled = true

    entTime = new Date()

    alert(`Moshina soat ${entTime.getHours()} : ${entTime.getMinutes()} da avtoturargohgakirdi`)

    exit.disabled = false

    return entTime
})

exit.addEventListener('click', () => {
    exit.disabled = true
    ent.disabled = false

    exitTime = new Date()

    let res = Math.abs((exitTime.getHours() * 60 + exitTime.getMinutes()) - (entTime.getHours() * 60 + entTime.getMinutes()))
    let hour = Math.floor(res / 60)
    let minut = res % 60

    if (minut > 0) {
        hour = hour + 1
    }

    let money = (hour * 4) + 1
    let span = `
    Sizdan avtoturargohda turganinggiz uchun <span>${money}$</span> boldi.
    `

    result.innerHTML = span
})