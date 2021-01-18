
import React from "react";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import Header from "./Header";
import InputField from "./InputField";
import { GlobalStyle } from "./styles/GlobalStyles";
import Todoslist from "./TodosList";
import { PersistGate } from 'redux-persist/integration/react';
import { Footer } from "./Footer";


const Layout = ({ children }) => {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <Header />
          <InputField />
          <Todoslist />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  )
}

// class Layout extends React.Component {
//   constructor() {
//     super()
//     this.state = { rehydrated: false }
//   }


//   componentWillMount() {
//     persistStore(store, {}, () => {
//       this.setState({ rehydrated: true })
//     })
//   }

//   render() {
//     if (!this.state.rehydrated) {
//       return <div>Loading...</div>
//     }

//     return (
//       <Provider store={store}>
//         <GlobalStyle />
//         <Header />
//         <InputField />
//         <Todoslist />
//       </Provider>
//     )
//   }
// }


export default Layout
