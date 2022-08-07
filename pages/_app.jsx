import '../styles/globals.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import NavBar from '../components/NavBar';
import CartProvider from '../store/CartProvider';
import { ThumbnailProvider } from '../store/ThumbnailProvider';
import { InfoProvider } from '../store/InfoProvider';

function MyApp({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CartProvider>
        <NavBar />
        <ThumbnailProvider>
          <InfoProvider>
            <Component {...pageProps} />
          </InfoProvider>
        </ThumbnailProvider>
      </CartProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
