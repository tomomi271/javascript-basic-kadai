// btnというidを持つHTML要素を取得し、定数に代入する
const pushBtn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const getText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
pushBtn.addEventListener('click', () => {

getText.textContent = 'ボタンをクリックしました';
})