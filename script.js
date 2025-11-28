const textInput = document.getElementById("text");
const generateBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download");
const canvas = document.getElementById("qrCanvas");

generateBtn.addEventListener("click", async () => {
    const text = textInput.value.trim();

    if (!text) {
        alert("Please enter some text");
        return;
    }

    canvas.width = 300;
    canvas.height = 300;

    try {
        await QRCode.toCanvas(canvas, text, {
            width: 300,
            margin: 2
        });

        downloadBtn.disabled = false;

    } catch (err) {
        console.error(err);
        alert("QR generation failed!");
    }
});

downloadBtn.addEventListener("click", () => {
    const imgUrl = canvas.toDataURL("image/png");

    const a = document.createElement("a");
    a.href = imgUrl;
    a.download = "qr-code.png";
    a.click();
});
