import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SmoothScroll from 'smooth-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
new SmoothScroll('a[href*="#"]', {
  speed: 600,
});


AOS.init();