import '../styles/global.css';
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>

    ) 
}

export function reportWebVitals(metric) {
    console.log(metric);
  }