
function send() {
    let msg = document.getElementById("msg");
    if (msg.value.trim() === "") return;

    let p = document.createElement("p");
    p.textContent = "You: " + msg.value;
    document.getElementById("messages").appendChild(p);

    msg.value = "";
}
