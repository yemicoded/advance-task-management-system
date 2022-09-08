import SecondaryLayout from '../layouts/students/layout';
import Layout from '../layouts/students/layout';
import {ThemeProvider} from 'next-themes'
import PrimaryLayout from '../layouts/students/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  if (Component.Info) {
    return (
      <ThemeProvider attribute='class'>
        <Layout
          pageTitle={Component.Info.title}
          searchFilter={Component.Info.searchFilter}
        >
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp
