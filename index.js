'use strict';

// {
//     function double(num){//num (引数)関数定義の定数は定義必要ない
//         return num * 2;
//     }
//     console.log(double(10));
//     console.log(double(4) * 3):
// }
{
document.querySelector('button').addEventListener('click', () => {
    const liElement = document.createElement('li');
    liElement.textContent = 'Hanako';
    // document.querySelector('ul').appendChild(liElement);
    // okをクリックしたらjiroの前にhanako 
    document.querySelector('ul').insertBefore(liElement,
    document.querySelector('#second'));
    // ボタンをクリックしたらjiroを削除
    if(confirm('sure?') === true){
    document.querySelector('#second').remove();
    }
});
}

// フォーム部品の値にアクセスする方法
// inputの中に値を入力するとアラートで表示
document.querySelector('button').addEventListener('click', () => {
    alert(document.querySelector('input').value);
    alert(document.querySelector('textarea').value)
    // テキストエリアの中を空にする
    document.querySelectorAll('textarea').value = '';
});
// Input,textareaの値にはvalueを使う

// optionタグの中の選択した値がアラートで表示
document.querySelector('button'),addEventListener('click',()=>{
    alert(document.querySelector('select').value);
});
