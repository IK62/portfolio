/* @refresh reload */
import { render } from 'solid-js/web';

import './assets/index.css';
import Routers from './routers';

const root = document.getElementById('root');

render(() => <Routers />, root);
