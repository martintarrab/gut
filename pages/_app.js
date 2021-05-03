import { useEffect } from "react";
import { useRouter } from 'next/router'
import { Provider, useDispatch } from "react-redux";
import { useStore } from "redux/store";
import { isClientSide, debounce } from "utils";
import { Actions } from "redux/system/actions";
import { Actions as AppActions } from "redux/app/actions";
import { config } from "static/config";
import { CookiesProvider } from "react-cookie";
import { useCookies } from "react-cookie";
import "../src/styles/globals.scss";

const ReduxApp = ({ Component, pageProps }) => {
  const store = useStore();

  return (
    <CookiesProvider>
      <Provider store={store}>
        <App Component={Component} pageProps={pageProps} />
      </Provider>
    </CookiesProvider>
  );
};

const App = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const router = useRouter()
  const { locale, locales, defaultLocale } = router
  const pagePropsWithLocale = {locale, locales, defaultLocale, ...pageProps}
  const [cookies, setCookie] = useCookies(["office"]);

  useEffect(() => {
    const updateScreenSize = debounce(() => {
      const updatedDeviceInfo = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      dispatch(Actions.updateDeviceInfo(updatedDeviceInfo));
    });
    if (isClientSide()) {
      window.addEventListener("resize", updateScreenSize, false);
      updateScreenSize();
    }
    return () => {
      window.addEventListener("resize", updateScreenSize, false);
    };
  }, []);

  useEffect(()=>{
    const officeByLocale = config.defaultOffices[locale];
    dispatch(AppActions.setCurrentOffice(cookies.office ? cookies.office : officeByLocale));
  },[])

  return <Component {...pagePropsWithLocale} />;
};

export default ReduxApp;
