var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var text = document.getElementById('input').value;
console.log(text)

ctx.font = "96px Noto Sans";
ctx.fillStyle = "rgb(255,255,255)";
ctx.fillRect(0, 0, canvas.width, canvas.height); //GIF can't do transparent so do white

var encoder = new GIFEncoder();
encoder.setRepeat(0); //auto-loop
encoder.setDelay(500);
console.log(encoder.start());


function random255() {
    return Math.floor(Math.random() * 255)
}

function encodeNext(i) {
    if (i < text.length) {
        ctx.fillStyle = "rgb(255,255,255)";
        ctx.fillRect(0, 0, canvas.width, canvas.height); //GIF can't do transparent so do white

        ctx.fillStyle = `rgb(${random255()},${random255()},${random255()})`;
        character = text[i];
        ctx.fillText(character, 15, 96);
        encoder.addFrame(ctx);
        encodeNext(i + 1);
    }
}
encodeNext(0)
encoder.finish();
document.getElementById('image').src = 'data:image/gif;base64,' + encode64(encoder.stream().getData())
