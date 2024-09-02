// import logo from './Chocolate-Lava-Cake-Blog1.jpg';
import './css/japfood.css';
import JapFood from './components/Japfood.js';
import FoodImage from './images/japanese-food-2.jpg';
import NumberBox from './NumberBox.js';
import AlertBox from './AlertBox.js';
import TickleBox from './TickleBox.js';
import Dice from './Dice.js';
import SurveyForm from './SurveyForm.js';
import Alert from './Alert.js'
import RandomUser from './components/RandomUser.js';
import User from './components/Users.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <JapFood />
      </header>
      <RandomUser />
      <User />
      <DisplayMessage whatever_message="Insert message here!" />
      <ImageFrame image={FoodImage} />
      <SumOfTwo num1={5} num2={10} />
      <Alert message="danger danger will robinson!" />
      <NumberBox initialValue={5}/>
      <AlertBox message="Initial Alert Message"/>
      <TickleBox initialMessage="Dont Tickle Me!"/>
      <Dice />
      <SurveyForm />
      <RandomUser />
    </div>
  );
}

export default App;

// Lab 2
function ImageFrame(props) {
  return (
    <img src={props.image} />
  )
}
// Lab3
function DisplayMessage(props) {
  return <div>
    {props.whatever_message}
  </div>
}

function SumOfTwo({ num1, num2 }) {
  return <div>
    {num1 + num2}
  </div>
}