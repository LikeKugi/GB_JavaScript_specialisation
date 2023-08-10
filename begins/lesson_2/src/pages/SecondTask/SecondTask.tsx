import { JSX, useState } from "react";

const SecondTask = (): JSX.Element => {
  const [fnum, setFnum] = useState(0);
  const [snum, setSnum] = useState(0);


  return (
    <section>
      <input type="number"
             name="first"
             value={fnum}
             onChange={(e) => setFnum(+e.target.value)}/>
      <input type="number"
             name="second"
             value={snum}
             onChange={(e) => setSnum(+e.target.value)}/>

      <p>Сумма чисел равна {fnum + snum}</p>
      <p>Разность чисел равна {fnum - snum}</p>
      <p>Произведение чисел равно {fnum * snum}</p>
      <p>Частное чисел равно {fnum / snum}</p>
      <p>Остаток от деления чисел равен {fnum % snum}</p>
    </section>
  );
};
export default SecondTask;
