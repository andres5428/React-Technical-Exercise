import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import Header from "./Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import { PersistGate } from 'redux-persist/integration/react';
import { Footer } from "./Footer";
import SimpleMap from "./SimpleMap";


const MapsLayout = ({ children }) => {

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <GlobalStyle />
                    <Header />
                    <SimpleMap/>
                    <Footer />
                </PersistGate>
            </Provider>
        </>
    )
}

export default MapsLayout