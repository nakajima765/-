// ハンバーガーメニューとメニュー要素を取得
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// ハンバーガーメニューをクリックしたときの処理
hamburger.addEventListener("click", function () {
    menu.classList.toggle("show"); // メニューのクラスを切り替え
});;

// メニュー以外の部分をクリックしたときの処理
document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        // クリックした要素がメニューやハンバーガー以外なら
        menu.classList.remove("show"); // メニューを非表示
    }
});

const slides = document.querySelectorAll(".slide");//slideに登録した要素前選択
let currentIndex = 0;//最初の画像を示す0

function showNextSlide() {
    slides[currentIndex].classList.remove("active");

    currentIndex = (currentIndex + 1) % slides.length;

    slides[currentIndex].classList.add("active");
}

setInterval(showNextSlide, 3000);






