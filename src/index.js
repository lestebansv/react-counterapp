import { createRoot } from 'react-dom/client';
// import PrimeraApp from './PimeraApp';
import CounterApp from './CounterApp';

import './index.css'

const divRoot = document.querySelector('#root');
const root = createRoot(divRoot);

// root.render(<PrimeraApp saludo="Hola, Soy Goku" />);
root.render(<CounterApp value={5} />);