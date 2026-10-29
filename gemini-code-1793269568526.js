// Lấy thẻ canvas và bộ công cụ vẽ (ctx)
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 1. Định nghĩa trạng thái màn hình
let gameState = "MENU";

// 2. Tọa độ và kích thước nút "Bắt đầu"
const btn = {
    x: 300,
    y: 250,
    width: 200,
    height: 50,
    text: "BẮT ĐẦU CHƠI"
};

// 3. Hàm vẽ toàn bộ giao diện màn hình game
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameState === "MENU") {
        // Vẽ tiêu đề game
        ctx.fillStyle = "yellow";
        ctx.font = "bold 36px Arial";
        ctx.textAlign = "center";
        ctx.fillText("WUXIA CHIBI RPG", canvas.width / 2, 150);

        // Vẽ nút "Bắt đầu"
        ctx.fillStyle = "#4CAF50";
        ctx.fillRect(btn.x, btn.y, btn.width, btn.height);

        // Viết chữ lên nút
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.fillText(btn.text, canvas.width / 2, btn.y + 32);

    } else if (gameState === "PLAYING") {
        // Vẽ màn hình chơi game
        ctx.fillStyle = "#2c3e50";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Vẽ nhân vật giả lập
        ctx.fillStyle = "#e74c3c";
        ctx.fillRect(100, 300, 50, 80);

        ctx.fillStyle = "white";
        ctx.font = "18px Arial";
        ctx.textAlign = "left";
        ctx.fillText("Đang trong game! Bấm phím ESC để quay lại Menu.", 30, 50);
    }
}

// 4. Lắng nghe sự kiện Click chuột
canvas.addEventListener("click", function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    if (gameState === "MENU") {
        if (
            mouseX >= btn.x &&
            mouseX <= btn.x + btn.width &&
            mouseY >= btn.y &&
            mouseY <= btn.y + btn.height
        ) {
            gameState = "PLAYING";
        }
    }
});

// 5. Lắng nghe phím ESC để quay lại Menu
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        gameState = "MENU";
    }
});

// 6. Vòng lặp game (Game Loop)
function gameLoop() {
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();