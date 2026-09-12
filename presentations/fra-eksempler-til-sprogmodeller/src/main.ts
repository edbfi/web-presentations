import { mount } from 'svelte';
import '@fontsource/barlow/latin-400.css';
import '@fontsource/barlow/latin-500.css';
import '@fontsource/barlow/latin-600.css';
import '@fontsource/barlow-condensed/latin-600.css';
import './style.css';
import App from './App.svelte';

mount(App, { target: document.getElementById('app')! });
