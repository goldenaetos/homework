alert("Добро пожаловать в нашу самую лучшую в мире игру!")

let resultConf = confirm("А Вы, вообще, хотите сыграть?")

if (resultConf == true) {
    let resultOpros1 = prompt("Как Ваше имя?")
    let resultOpros2 = prompt("А фамилия?")
    let resultOpros3 = prompt("Сколько Вам лет?")
    let result1 = prompt("Сколько ног у собаки?") // 4
    let result2 = prompt("Сколько ног у двух собак?") // 8
    let result3 = prompt("Сколько ног у двух собак и трех зайцев?") // 20
    let result4 = prompt("Сколько ног у трех зайцев и одного охотника?") // 14
    let result5 = prompt("Сколько ног у трех зайцев, если одного из них подстрелил охотник?") // 12

    if (result1 == 4) {
        var otvet1 = 1 // для подсчета количества правильных ответов. За каждый правильный ответ - плюс 1.
        var mult1 = 1 // множитель для подсчета очков в конечном результате. При правильном ответе равен порядковому номеру вопроса.
    } else {
        var otvet1 = 0
        var mult1 = 0
    }

    if (result2 == 8) {
        var otvet2 = 1
        var mult2 = 2
    } else {
        var otvet2 = 0
        var mult2 = 0
    }

    if (result3 == 20) {
        var otvet3 = 1
        var mult3 = 3
    } else {
        var otvet3 = 0
        var mult3 = 0
    }

    if (result4 == 14) {
        var otvet4 = 1
        var mult4 = 4
    } else {
        var otvet4 = 0
        var mult4 = 0
    }

    if (result5 == 12) {
        var otvet5 = 1
        var mult5 = 5
    } else {
        var otvet5 = 0
        var mult5 = 0
    }

    let pravilnyeOtvety = otvet1 + otvet2 + otvet3 + otvet4 + otvet5 // количество правильных ответов
    let bally = (mult1 * 2) ** 2 + (mult2 * 2) ** 2 + (mult3 * 2) ** 2 + (mult4 * 2) ** 2 + (mult5 * 2) ** 2 // количество очков 
    
    alert("Нажмите OK, чтобы увидеть, на сколько вопросов Вы ответили правильно.")
    alert(pravilnyeOtvety)

    alert("Нажмите ОК, чтобы увидеть, сколько очков Вы получили.")
    alert(bally)

} else {
    alert("В таком случае для Вас игра окончена!")
}