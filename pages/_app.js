import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
