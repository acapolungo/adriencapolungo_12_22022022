
import RoutesPath from './routes/RoutesPath';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import './styles/App.scss';


export default function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <RoutesPath />
    </>
  )
}
