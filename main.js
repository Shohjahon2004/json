// API - инструмент для взаимодействия между клиентом и сервером ( frontEnd и backEnd )

// fetch() - встроенная функция в js Для того чтобы делать запросы на сервер

// Есть 4 вида основных запросов
// get запрос - получает данные
// post запрос - отправляет данные
// put запрос - Обновляет или изменяет текущие данные
// delete запрс - удаляет данные

// function getUsers() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))
// }

// getUsers()

// async await - работает также с асинхроны кодом и его задача упростить работу с промисами

let users = document.querySelector('.users')

async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        data.forEach((item) => {
            let usersItem = document.createElement('div'),
                h2 = document.createElement('h2'),
                p = document.createElement('p'),
                city = document.createElement('p'),
                username = document.createElement('p')
                phone = document.createElement('p')
                
                

            usersItem.classList.add('users__item');
            city.classList.add('users__text');
            username.classList.add('users_name');
            phone.classList.add('users__phone');

            city.innerHTML = 'Город: ' + item.address.city
            h2.textContent = 'Имя: ' + item.name
            p.innerHTML = `email:<a href="${item.email}"> ${item.email}</a>`
            phone.innerHTML = `phone: ${item.phone}`
            
            

            usersItem.append(h2)
            usersItem.append(city)
            usersItem.append(p)
            usersItem.append(phone)
            
            users.append(usersItem)


            
        })
    } catch (error) {
        console.log('Ошибка произошла при получении пользователй ' + error);
    }
}
getUsers()