import { RouterProvider } from "react-router"
import { Provider } from 'react-redux';
import router from "./common/router"
import { store } from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider >
  );
};

export default App
