import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/globals.scss';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    // import('../styles/globals.scss');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
