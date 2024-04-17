'use strict';

// {
//     function double(num){//num (引数)関数定義の定数は定義必要ない
//         return num * 2;
//     }
//     console.log(double(10));
//     console.log(double(4) * 3):
// }
// {
//     document.querySelector('button').addEventListener('click', () => {
//         const liElement = document.createElement('li');
//         liElement.textContent = 'Hanako';
//         // document.querySelector('ul').appendChild(liElement);
//         // okをクリックしたらjiroの前にhanako 
//         document.querySelector('ul').insertBefore(liElement,
//             document.querySelector('#second'));
//         // ボタンをクリックしたらjiroを削除
//         if (confirm('sure?') === true) {
//             document.querySelector('#second').remove();
//         }
//     });
// }

// フォーム部品の値にアクセスする方法
// inputの中に値を入力するとアラートで表示
// document.querySelector('button').addEventListener('click', () => {
//     alert(document.querySelector('input').value);
//     alert(document.querySelector('textarea').value)
//     // テキストエリアの中を空にする
//     document.querySelectorAll('textarea').value = '';
// });
// Input,textareaの値にはvalueを使う

// optionタグの中の選択した値がアラートで表示
// document.querySelector('button'), addEventListener('click', () => {
//     alert(document.querySelector('select').value);
// });

// radioボタンの使い方
// {
//     document.querySelector('button').addEventListener('click', () => {
//         document.querySelectorAll('input').forEach(() => {
//             if (radio.checked === true) {
//                 alert(radio.value);
//             }
//         });
//     });
// }

// checkboxの値にアクセス
// 選択されたものを一括で表示
{
    // document.querySelector('button').addEventListener('click',() => {
    //     const colors = [];
    //     document.querySelectorAll('input').forEach((checkbox) => {
    //         if(checkbox.checked === true){
    //             colors.push(checkbox.value);
    //         }
    //     });
    //     alert(colors.join(','));
    // })
}

// inputイベント inputに入力するとpタグにその値を反映
// イベント指定→ text,textarea,input,select => input
//             radio,checkbox => changeを使う
// document.querySelector('input').addEventListener('input', () => {
//     const p = document.querySelector('p');
//     const inputText = document.querySelector('input');
//     // inputText.valueだと文字列を反映し、inputText.value.lengthは文字数を反映
//     p.textContent = inputText.value.length;
// });

// focus,blurイベント フォーカスされたときpタグにヒントが表示される
// {
//     document.querySelector('input').addEventListener('focus', () => {
//         document.querySelector('p').textContent = 'English only!';
//     });
//     // focusが外れる時のイベント処理 空文字にする
//     document.querySelector('input').addEventListener('blur', () => {
//         document.querySelector('p').textContent = '';
//     });
//     // focusが最初から当たっているように
//     document.querySelector('input').focus();
// }

// {
//     // キーが押されたときのイベント キーで操作するゲームなどを作ることができる
//     document.addEventListener('keydown', (e) => {
//         document.querySelector('p').textContent = e.key;
//     });
// }

//マウスイベント マウスを動かしたらｘ座標が画面に表示される
// document.addEventListener('mousemove', (e) => {
//     document.querySelector('p').textContent = `X:${e.clientX} Y:${e.clientY}`
// });

// 入力された値をpに反映
// formは送信したデータを処理→別のページに移動
// ページを指定しないとページに再読み込みがされるから値が一瞬で消えてしまう。その解決がe.preventDefaultを使う。enterでもsubmitイベントを発火させられるように
// {
//     document.querySelector('form').addEventListener('submit',(e) => {
//         e.preventDefault();
//         document.querySelector('p').textContent = document.querySelector('input').value;
//     });
// }

{
    // promptは文字列を反映させるためnを数値に変換
    // const n = Number(prompt(`number?`));
    // console.log(n + 5);

    // 分数を入れたらそれが何時間何分か教えてくれる
    // const n = Number(prompt(`time?`));
    // console.log(`Hours: ${Math.floor(n/60)}`);//一時間６０分だから６０で割る
    // console.log(`Minute: ${n % 60}`);//分は６０で割った余りだから％を使う

    // 日本円を入れたらドルにする 小数点以下２桁まで(toFixed(2);)
    // const n = Number(prompt(`yen?`));
    // const amount = (n / 138.91).toFixed(2);
    // // 3桁ごとに、をつける
    // // console.log(`usd: ${amount}`);
    // console.log(`USD: ${Number(amount).toLocaleString()}`);
}

// 指定した行数だけ何らかのデータを反映
{
    const n = Number(prompt('count?'));
    for (let i = 0; i < n; i++) {
        // iを3で割ったときのあまりが0だったら
        if (i % 3 === 0) {
            console.log(`item ${i}---`);
        } else {
            console.log(`item ${i}===`);
        }

    }
}