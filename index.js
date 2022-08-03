let attaccanti = "?";
let difensori = "?";
let started = false;

function clear_pictures() {
    for (let i = 0; i < 3; i++) {
        document.querySelector(".atk_" + i).src = "images/empty.png";
    }
    for (let i = 0; i < 3; i++) {
        document.querySelector(".mid_" + i).src = "images/empty.png";
    }
    for (let i = 0; i < 3; i++) {
        document.querySelector(".def_" + i).src = "images/empty.png";
    }
}

document.querySelector(".reset").addEventListener("click", () => {
    started = false;
    attaccanti = "?";
    difensori = "?";
    document.querySelector(".atk_label").innerText = "attaccanti: " + attaccanti;
    document.querySelector(".def_label").innerText = "difensori: " + difensori;
    document.querySelector(".atk_input").value = "";
    document.querySelector(".def_input").value = "";
    clear_pictures();
});

document.querySelector(".tira").addEventListener("click", () => {
    if (!started) {
        if (document.querySelector(".atk_input").value === "" || document.querySelector(".def_input").value === "") {
            window.alert("inserisci gli attaccanti e i difensori!");
            return;
        }
        attaccanti = parseInt(document.querySelector(".atk_input").value);
        difensori = parseInt(document.querySelector(".def_input").value);
        started = true;
    }
    if (difensori <= 0) {
        window.alert("l'attaccante ha già vinto!");
        return;
    }
    else if (attaccanti <= 1) {
        window.alert("ti servono almeno 2 truppe per attaccare!");
        return;
    }
    document.querySelector(".atk_label").innerText = "attaccanti: " + attaccanti;
    document.querySelector(".def_label").innerText = "difensori: " + difensori;
    let atk_arr = [];
    let def_arr = [];
    let atk_len = 0;
    let def_len = 0;
    if (attaccanti >= 4) {
        atk_len = 3;
    }
    else if (attaccanti === 3) {
        atk_len = 2;
    }
    else if (attaccanti === 2) {
        atk_len = 1;
    }
    if (difensori >= 3) {
        def_len = 3;
    }
    else if (difensori === 2) {
        def_len = 2;
    }
    else if (difensori === 1) {
        def_len = 1;
    }
    for (let i = 0; i < atk_len; i++) {
        atk_arr.push(Math.floor((Math.random() * 6)) + 1);
    }
    for (let i = 0; i < def_len; i++) {
        def_arr.push(Math.floor((Math.random() * 6)) + 1);
    }
    atk_arr.sort();
    atk_arr.reverse();
    def_arr.sort();
    def_arr.reverse();
    clear_pictures();
    for (let i = 0; i < atk_len; i++) {
        document.querySelector(".atk_" + i).src = "images/atkdice" + atk_arr[i] + ".png";
    }
    for (let i = 0; i < def_len; i++) {
        document.querySelector(".def_" + i).src = "images/defdice" + def_arr[i] + ".png";
    }
    let mid_len = Math.min(atk_len, def_len);
    for (let i = 0; i < mid_len; i++) {
        if (atk_arr[i] > def_arr[i]) {
            document.querySelector(".mid_" + i).src = "images/atkarrow.png";
            difensori -= 1;
        } else {
            document.querySelector(".mid_" + i).src = "images/defarrow.png";
            attaccanti -= 1;
        }
    }
    document.querySelector(".atk_label").innerText = "attaccanti: " + attaccanti;
    document.querySelector(".def_label").innerText = "difensori: " + difensori;
});
