
// =========================
// ① クリックで色が変化
// =========================

const btn = document.querySelector('#fade-button-js');

btn.addEventListener('click', () => {
  btn.style.backgroundColor = '#05b';

  setTimeout(() => {
    btn.style.backgroundColor = '#07f';
  }, 500);
});


// =========================
// ② ランダムに色が変化
// =========================

const btnRandom = document.querySelector('#fade-button-random');

btnRandom.addEventListener('click', () => {
  const randomColor = '#' +
    Math.floor(Math.random() * 16777216)
      .toString(16)
      .padStart(6, '0');

  btnRandom.style.backgroundColor = randomColor;
});


// =========================
// ③ カーソルの位置で色が変化
// =========================

const flowBtn = document.querySelector('#flow-button-js');

flowBtn.addEventListener('mousemove', (e) => {
  const rect = flowBtn.getBoundingClientRect();

  const x = ((e.clientX - rect.left) / rect.width) * 100;

  flowBtn.style.backgroundPosition = `${x}% 0`;
});

flowBtn.addEventListener('mouseleave', () => {
  flowBtn.style.backgroundPosition = '0% 0';
});


// =========================
// ④ いいねボタン
// =========================

const likeButton = document.querySelector('.like-button-js');

likeButton.addEventListener('click', () => {
  if (likeButton.classList.contains('liked')) {

    // いいねを解除
    likeButton.classList.remove('liked');
    likeButton.textContent = '👍 いいね！';

  } else {

    // いいね状態にする
    likeButton.classList.add('liked');
    likeButton.textContent = '👍 いいね済み';

  }
});


// =========================
// ⑤ ぐるっとラインが囲む
// =========================

const btnAdv = document.querySelector('.btn-inner-adv');
const rectAdv = document.querySelector('.btn-rect-adv');

btnAdv.addEventListener('click', () => {

  // アニメーションをリセット
  rectAdv.classList.remove('active');

  // 再描画してから再生
  void rectAdv.getBoundingClientRect();

  rectAdv.classList.add('active');

});


// =========================
// ⑥ 矢印が変わる
// =========================

const btnChange = document.querySelector('.btn-change');

btnChange.addEventListener('click', () => {

  btnChange.classList.add('done');
  btnChange.textContent = '完了！';

});


// =========================
// ⑦ キラキラ輝くボタン
// =========================

const sparkleButton = document.querySelector('.btn-sparkle');

function createSparkle() {

  const sparkle = document.createElement('div');

  sparkle.classList.add('sparkle');

  // 星のサイズをランダムに設定
  const size = Math.random() * 6 + 4;

  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  // 星の表示位置をランダムに設定
  const x = Math.random() * sparkleButton.clientWidth;
  const y = Math.random() * sparkleButton.clientHeight;

  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;

  sparkleButton.appendChild(sparkle);

  // 2秒後に星を削除
  setTimeout(() => {
    sparkle.remove();
  }, 2000);

}

// 0.3秒ごとに星を生成
setInterval(createSparkle, 300);


const circleButton = document.querySelector('.btn-circle');

circleButton.addEventListener('click', () => {

  // 高速回転のクラスを追加
  circleButton.classList.add('fast-spin');

  // 0.4秒後に通常の回転速度に戻す
  setTimeout(() => {
    circleButton.classList.remove('fast-spin');
  }, 400);

});