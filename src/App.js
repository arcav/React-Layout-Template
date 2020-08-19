import React from "react";
import Layout from './Components/Layout/Index'
import Routes from './Routes/Routes'
import './index.css';



const App = () => {
  return (
    <>
      <Layout>
        <main>
          <Routes />
        </main>
      </Layout>
    </>
  );
};

export default App;