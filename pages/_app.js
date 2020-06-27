// import App from 'next/app'
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Header from '../components/Header';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <div className="bg">
      <div className="overlay">
        <Header />
        <div
          sx={{
            maxWidth: 'contentContainer',
            mx: 'auto',
            px: 3,
          }}
        >
          <Component {...pageProps} />
        </div>
      </div>
    </div>
    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      .bg {
        background-image: url('/bgGrass.jpg');
      }

      .overlay {
        background: rgba(44, 42, 42, 0.6);
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </ThemeProvider>
);

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
