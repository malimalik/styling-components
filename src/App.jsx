import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import '../src/Header.css';


export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
