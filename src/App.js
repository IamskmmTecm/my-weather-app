import Nav from './components/nav';
import CurrentData from './components/CurrentData';
import { Route, Routes } from 'react-router-dom';
import GoTo from './components/GoTo';

function App() {
  return (

    <div className="bg-image p-5 text-center shadow-1-strong text-white"
      style={{
        height: '100vh',
        backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/disp/68921b29340193.55eea8837b0d9.gif')`,
        justifyContent: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >

<header style={{fontSize: '40px', }}>My Weather</header>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Nav />
      </div>

      <Routes>
        <Route path='/' element={<div style={{ position: 'absolute', top: '40vh', left: '38vw' }}><CurrentData /></div>}></Route>
        <Route path='goTo' element={<GoTo />}></Route>
      </Routes>

    </div>

  );
}

export default App;