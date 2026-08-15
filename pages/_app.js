import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.css';
import '../src/styles/_homePage.scss';
import '../src/styles/_nav.scss';
import '../src/styles/_footer.scss';

import Layout from '../src/App';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
