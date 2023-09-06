export const addTasks = (): void => {
  document.querySelector('#root').innerHTML = `<div>
      <h3>Task 1</h3>
      <p>Необходимо получить список всех пользователей с помощью бесплатного API
        (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность
        удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера
        localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища
        localStorage</p>
        <h3>Task 2</h3>
      <p>Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3
        секунды.</p>
    </div>`
}