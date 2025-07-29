import Bookdisplay from "./reudx/Bookdisplay";
import { Provider } from "react-redux";
import store from "./reudx/Store";

function App() {


  return (
    <>
   <Provider store={store}>
    <Bookdisplay/>
   </Provider>
    </>
  );
}


export default App