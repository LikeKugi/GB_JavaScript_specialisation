const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

interface IUser {
  id: number
  name: string
  email: string
  username: string
}

export const fetchUsers = async (url=USERS_URL): Promise<IUser[]> => {
  const response = await fetch(url);
  return  await response.json();
}

export const createUserLayout = (user: IUser): string => {
  return `<div class="user" id="user_${user.id}">
      <h2 class="user__title">${user.username}</h2>
      <p class="user__info">${user.name}</p>
      <p class="user__info">${user.email}</p>
      <div class="user__controls">
        <button class="user__btn" type="button">Delete user</button>
      </div>
    </div>`;
}

export const createFullLayout = (users: IUser[]): string => {
  let usersInner = ''
  users.forEach(user => usersInner += createUserLayout(user));
  return `<div>${usersInner}</div>>`
}

export const addUsersToLocalStorage = (users: IUser[]): void => {
  localStorage.setItem('users', JSON.stringify(users));
}

export const getUsersFromLocalStorage = (): IUser[] => {
  return JSON.parse(localStorage.getItem('users'));
}

export const delUserFromLocalStorage = (id: number): void  => {
  const usersArray = getUsersFromLocalStorage();
  const filtered = usersArray.filter(user => +user.id !== id);
  addUsersToLocalStorage(filtered);
}

export const delUser = (id: number): void => {
  delUserFromLocalStorage(id);
  addFullLayout(getUsersFromLocalStorage());
}

export const addFullLayout = (usersArray: IUser[]): void => {
  const layout = createFullLayout(usersArray);
  const root = document.querySelector('#root');
  root.innerHTML = layout;
}

export const createUsers = async () => {
  const usersArray = await fetchUsers();
  addUsersToLocalStorage(usersArray);
  addFullLayout(usersArray);
}
