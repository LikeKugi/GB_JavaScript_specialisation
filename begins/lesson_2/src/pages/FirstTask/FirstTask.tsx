import { ChangeEvent, FormEvent, JSX, useState } from "react";

const FirstTask = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);

  const ageHandler = (e: ChangeEvent) => {
    e.preventDefault();
    if (e.target instanceof HTMLInputElement) {
      +e.target.value > 0 ? setAge(+e.target.value) : setAge(0);
    }
  }

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
  }


  return (
    <section>
      <p>Добро пожаловать, {username}. Ваше количество оборотов вокруг солнца - {age}.</p>
      <form onSubmit={submitHandler}>
        <label htmlFor={'userName'}>Username</label>
        <input type="text" id={'userName'} value={username} onChange={(e) => setUsername(e.target.value)}/>

        <label htmlFor={'age'}>Age</label>
        <input type="number" id={'age'} value={age} onChange={ageHandler}/>

        <button>Enter</button>
      </form>
    </section>
  );
};
export default FirstTask;
