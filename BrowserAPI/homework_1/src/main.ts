import './style.css'
import { App } from './App/App';

const root = document.querySelector('#root')

const app = new App(root as HTMLDivElement);
app.init();
