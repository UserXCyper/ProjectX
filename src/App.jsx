import { Routes, Route } from 'react-router-dom'
import { Video } from './components/Video'
import { Home } from './components/Home'
import { Layout } from './Layout';
import { VideoProvider } from './provider/VideoProvider';
import { Login } from './components/Login';
import { UserProvider } from './provider/UserProvider';

function App() {

  return (
    <>
      <UserProvider>
        <VideoProvider>
          <Routes>
            <Route path='/' element={<Layout />} >
              <Route index element={<Home />} />
              <Route path='video' element={<Video />} />
              <Route path='login' element={<Login />} />
            </Route>
          </Routes>
        </VideoProvider>
      </UserProvider>
    </>
  )
}

export default App;
