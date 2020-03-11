
// Task 1 ============================================
/* 
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/
function createBodySite(bodySite) {
    return (...args) => {
        return bodySite + args.join('&');
    }
}
const pushArgs = createBodySite('http://getpost.itgid.info/index2.php?');



function t1() {
    const a1 = new Promise((resolve, reject) => {
        fetch(pushArgs('auth=5ADcB96BA48d3f80', 'action=1'))
            .then(data => {
                resolve(data.text());
            })
    });

    const b1 = new Promise((resolve, reject) => {
        fetch(pushArgs('auth=5ADcB96BA48d3f80', 'action=2', 'name=Iliya'))
            .then(data => resolve(data.text()));
    });

    Promise.all([a1, b1])
        .then(value => {
            let out = ``;

            value.map((item) => {
                out += `${item} <br>`;
            });
            document.querySelector('.out-1').innerHTML = out;
        });
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/* 
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>
 
*/
function t2() {
    const a2 = new Promise(resolve => {
        fetch(pushArgs('auth=5ADcB96BA48d3f80', 'action=3', 'num1=12', 'num2=12'))
            .then(data => resolve(data.text()));
    });

    const b2 = new Promise(resolve => {
        fetch(pushArgs('auth=5ADcB96BA48d3f80', 'action=4', 'num1=0', 'num2=12'))
            .then(data => resolve(data.text()));
    });

    Promise.all([a2, b2])
        .then(data => {
            document.querySelector('.out-2').innerHTML = data.map(item => `${item} `);
        })
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */
function t3() {
    const a3 = new Promise(resolve => {
        fetch(pushArgs('auth=5ADcB96BA48d3f80', 'action=5'))
            .then(data => resolve(data.text()));
    });
    const b3 = new Promise(resolve => {
        fetch(pushArgs('auth=5ADcB96BA48d3f80', 'action=6', 'num1=1', 'num2=0'))
            .then(data => resolve(data.text()));
    });

    Promise.all([a3, b3])
        .then(data => {
            document.querySelector('.out-3').innerHTML = data.map(item => `${item}`).join('<br>');
        });
}
document.querySelector('.b-3').onclick = t3;

// Task 4 ============================================
/*  
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

function t4() {
    const a4 = new Promise(resolve => {
        fetch(pushArgs('auth=5ADcB96BA48d3f80', 'action=7'))
            .then(data => resolve(data.text()));
    });
    const b4 = new Promise(resolve => {
        fetch(pushArgs('auth=5ADcB96BA48d3f80', 'action=8', 'year=1996'))
            .then(data => resolve(data.text()));
    });

    Promise.all([a4, b4])
        .then(data => {
            document.querySelector('.out-4').innerHTML = data.map(item => `${item} `).join('<br>');
        });
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*  
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
    const a5 = new Promise(resolve => {
        fetch(pushArgs(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'auth=5ADcB96BA48d3f80&action=1',
        })
            .then(data => resolve(data.text()))
    });
    const b5 = new Promise(resolve => {
        fetch(pushArgs(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=5ADcB96BA48d3f80&action=2&name=Iliya'
        })
            .then(data => resolve(data.text()));
    });

    Promise.all([a5, b5])
        .then(data => document.querySelector('.out-5').innerHTML = data.map(item => `${item} `).join('<br>'));

}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/* 
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
    const a6 = new Promise(resolve => {
        fetch(pushArgs(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=5ADcB96BA48d3f80&action=3&num1=1&num2=2'
        })
            .then(data => resolve(data.text()));
    });

    const b6 = new Promise(resolve => {
        fetch(pushArgs(), {
            method: 'Post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=5ADcB96BA48d3f80&action=4&num1=1&num2=5'
        })
            .then(data => resolve(data.text()))
    });

    Promise.all([a6, b6])
        .then(data => document.querySelector('.out-6').innerHTML = data.map(item => `${item} `).join('<br>'));
}

document.querySelector('.b-6').addEventListener('click', t6);

// Task 7 ============================================
/*  
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
    const a7 = new Promise(resolve => {
        fetch(pushArgs(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=5ADcB96BA48d3f80&action=5'
        })
            .then(data => resolve(data.text()))
    });
    const b7 = new Promise(resolve => {
        fetch(pushArgs(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=5ADcB96BA48d3f80&action=6&num1=1&num2=2'
        })
            .then(data => resolve(data.text()))
    })

    Promise.all([a7, b7])
        .then(data => document.querySelector('.out-7').innerHTML = data.map(item => `${item} `).join('<br>'));
}

document.querySelector('.b-7').addEventListener('click', t7);


// Task 8 ============================================
/* 
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/
function t8() {
    const a8 = new Promise(resolve => {
        fetch(pushArgs(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'action=7&auth=5ADcB96BA48d3f80'
        })
            .then(data => resolve(data.text()))
    });

    const b8 = new Promise(resolve => {
        fetch(pushArgs(), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'auth=5ADcB96BA48d3f80&year=1996&action=8'
        })
            .then(data => resolve(data.text()))
    });

    Promise.all([a8, b8])
        .then(data => document.querySelector('.out-8').innerHTML = data.map(item => `${item} `).join('<br>'));

}

document.querySelector('.b-8').addEventListener('click', t8);


