const URL_DOG = 'https://dog.ceo/api/breeds/image/random';

interface IDog {
  message: string;
  status: 'success';
}

const fetchDog = async (retries = 4, url = URL_DOG): Promise<string> => {
  if (retries < 1) {
    return;
  }
  const response = await fetch(url);
  if (response.ok) {
    const data: IDog = await response.json();
    return data.message;
  }
  return fetchDog(retries - 1);
};

const createImgLayout = (src: string) => {
  return `<img src="${src}" alt="dog" width="200">`;
};

const appendImg = (img: string): void => {
  document.querySelector('#root').insertAdjacentHTML('beforeend', img);
};

export const initDogs = () => {
  document.querySelector('#root').innerHTML = '';
  for (let i = 0; i < 10; i += 1) {
    setTimeout(async () => {
      const dogSrc = await fetchDog();
      if (!dogSrc) return;
      const dogImg = createImgLayout(dogSrc);
      appendImg(dogImg);
    }, 3000 * i);
  }
};
