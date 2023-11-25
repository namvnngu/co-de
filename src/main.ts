import './styles/app.scss';
import './styles/app-layout.scss';
import App from './App.svelte';

const app = new App({
  target: document.getElementById('app') as HTMLElement,
});

export default app;
