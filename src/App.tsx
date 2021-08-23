import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;