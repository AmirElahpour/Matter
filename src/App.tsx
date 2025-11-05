import Home from "./components/Home";
import { MatterProvider } from "./context/MatterContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <MatterProvider>
        <Layout>
          <Home />
        </Layout>
      </MatterProvider>
    </>
  );
}

export default App;
