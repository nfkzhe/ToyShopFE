import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout/";
import { Fragment } from "react";
import { CartProvider } from "~/contexts/CartContext";
import CartOffcanvas from "~/components/CartOffCanvas";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Layout = route.layout === null ? Fragment : DefaultLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
        <CartOffcanvas />
      </CartProvider>
    </Router>
  );
}

export default App;
