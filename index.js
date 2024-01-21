const bar = document.getElementById("bar");
const title = document.getElementById("title");

function changeBar(i) {
    let num = i;
    setTimeout(function () {
        if (num <= 100) {
            bar.setAttribute("value", num);
            console.log(num * 20 + "ms");
            num++;
            changeBar(num);
        } else {
            title.textContent = "Success!";
        }
    }, num * 20);
}

changeBar(0);

console.log(bar);
