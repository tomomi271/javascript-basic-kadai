const pushBtn = document.getElementById('btn');
const getText = document.getElementById('text');




pushBtn.addEventListener('click', () => {
// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
setTimeout(() => {
  getText.textContent = 'ボタンをクリックしました';
},2000);
});