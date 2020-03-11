function constructorHTTP(siteName) {
    return function (...parameter) {
        return `http://${siteName}?${parameter.join('&')}`;
    }
}

const nameOfSite = constructorHTTP('getpost.itgid.info/index2.php');

// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */
function sendToServer(method, outplace, ...parameters) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) outData(this.responseText, outplace);
    }

    if (method == 'GET') {
        xhttp.open(method, nameOfSite(parameters.join('&')), true);
        xhttp.send();
    }
    else if (method == 'POST') {
        xhttp.open(method, nameOfSite(), true);
        xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhttp.send(parameters.join('&'));
    }

    function outData(data, outplace) {
        document.querySelector(`.${outplace}`).innerHTML = data;
    }
}


document.querySelector('.b-1').onclick = () => sendToServer('GET', 'out-1', 'auth=5ADcB96BA48d3f80', 'action=1');

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

document.querySelector('.b-2').onclick = () => sendToServer('GET', 'out-2', 'auth=5ADcB96BA48d3f80', 'action=2', 'name=Iliya');


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

document.querySelector('.b-3').onclick = () => sendToServer('GET', 'out-3', 'auth=5ADcB96BA48d3f80', 'action=3', 'num1=5', 'num1=5');


// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

document.querySelector('.b-4').onclick = () => sendToServer('GET', 'out-4', 'auth=5ADcB96BA48d3f80', 'action=4', 'num1=0', 'num1=10');

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

document.querySelector('.b-5').onclick = () => sendToServer('GET', 'out-5', 'auth=5ADcB96BA48d3f80', 'action=5');


// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

document.querySelector('.b-6').onclick = () => sendToServer('GET', 'out-6', 'auth=5ADcB96BA48d3f80', 'action=6', "num1=-10", "num2=-8");

// ваше событие здесь!!!


// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

document.querySelector('.b-7').onclick = () => sendToServer('GET', 'out-7', 'auth=5ADcB96BA48d3f80', 'action=7');

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

document.querySelector('.b-8').onclick = () => sendToServer('GET', 'out-8', 'auth=5ADcB96BA48d3f80', 'action=8', 'year=1996');

// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

document.querySelector('.b-9').onclick = () => sendToServer('GET', 'out-9', 'auth=5ADcB96BA48d3f80', 'action=9', 'm=1', 'd=1', 'y=1');


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

document.querySelector('.b-10').onclick = () => sendToServer('POST', 'out-10', 'auth=5ADcB96BA48d3f80', 'action=1');

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

document.querySelector('.b-11').onclick = () => sendToServer('POST', 'out-11', 'auth=5ADcB96BA48d3f80', 'action=2', 'name=Iliya');

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

document.querySelector('.b-12').onclick = () => sendToServer('POST', 'out-12', 'auth=5ADcB96BA48d3f80', 'action=3', 'num1=6', 'num2=6');

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

document.querySelector('.b-13').onclick = () => sendToServer('POST', 'out-13', 'auth=5ADcB96BA48d3f80', 'action=4', 'num1=0', 'num2=10');

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

document.querySelector('.b-14').onclick = () => sendToServer('POST', 'out-14', 'auth=5ADcB96BA48d3f80', 'action=5');

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

document.querySelector('.b-15').onclick = () => sendToServer('POST', 'out-15', 'auth=5ADcB96BA48d3f80', 'action=6', 'num1=-1', 'num2=-2');

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

document.querySelector('.b-16').onclick = () => sendToServer('POST', 'out-16', 'auth=5ADcB96BA48d3f80', 'action=7');

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

document.querySelector('.b-17').onclick = () => sendToServer('POST', 'out-17', 'auth=5ADcB96BA48d3f80', 'action=8', 'year=1996');

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

document.querySelector('.b-18').onclick = () => sendToServer('POST', 'out-18', 'auth=5ADcB96BA48d3f80', 'action=9', 'm=1', 'd=1', 'y=1');


