import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/globals.scss';
// import '../styles/starter.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // import('bootstrap/dist/css/bootstrap.css');
    // import('../styles/starter.scss');
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
