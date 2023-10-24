import { IClass } from '../types/IClass';

export const fetchData = async (): Promise<IClass[]> => {
  const response = await fetch('data.JSON');
  return await response.json();
};
