import { JSX, useState } from "react";

const ThirdTask = (): JSX.Element => {
  const [num, setNum] = useState(0);

  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const [third, setThird] = useState(0);
  return (
    <section>
      <input type="number"
             name="first"
             value={num}
             onChange={(e) => setNum(+e.target.value)}/>

      <p>{num > 5 ? 'greater than 5' : num < 5 ? 'lower than 5' : '5'}</p>

      <input type="number"
             name="f"
             value={first}
             onChange={(e) => setFirst(+e.target.value)}/>
      <input type="number"
             name="s"
             value={second}
             onChange={(e) => setSecond(+e.target.value)}/>

      <p>Минимальное число {Math.min(first, second)}</p>

      <label htmlFor={'tt'}>Число, которое будет больше нуля и меньше 15.</label>

      <input type="number"
             name="tt"
             id={'tt'}
             value={third}
             onChange={(e) => setThird(+e.target.value)}/>

      <p>{third > 0 && third < 15 ? `Спасибо за число ${third}.` : `А вы, я смотрю, хулиганите! ${third} - неверное значение.`}</p>
    </section>
  );
};
export default ThirdTask;
