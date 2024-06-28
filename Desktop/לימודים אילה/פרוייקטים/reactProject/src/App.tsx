import './App.css'
import Background from './components/User/Background.component'
import Form from './components/User/Form.component'
import Navigation from './components/User/Navigation.component'
import Room from './components/User/Room.component'
import Home from './components/User/Home.component'
import Information from './components/User/Information.component'
import RoomsView from './components/User/RoomsView.component'

function App() {

  return (
    <div id='home'>
      <Background />
      <Navigation />
      <Home />
      <Room />
      <Information />
      <RoomsView />
      {/* <Form /> */}
    </div>



  )
}

export default App
