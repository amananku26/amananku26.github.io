import "./App.css";
import {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/homePage/Feedback"
import HomePage from "./components/homePage/HomePage";
import ScrollArrow from "./Scroll.jsx"
import Tour from 'reactour'

class App extends Component {
  constructor(){
    super()
    this.state = {
      isTourOpen : true,
      isShowingMore: false
    }

  }
  closeTour = () =>{
    this.setState({ isTourOpen: false });
  }
  toggleShowMore = () => {
    this.setState((prevState) => ({
      isShowingMore: !prevState.isShowingMore
    }));
  };
  render(){
  return (
    <div className="App">
      <HomePage />
      <Feed 
      data-tut="reactour__copy"
      dddd = {this.state.isTourOpen}
      openTour={this.openTour}
      toggleShowMore={this.toggleShowMore}
      isShowingMore={this.state.isShowingMore}
      />
      <ScrollArrow/>
      <Tour
       steps={steps}
       isOpen={this.state.isTourOpen}
      //  maskClassName="mask"
       className="helper"
        rounded={5}
       onRequestClose={this.closeTour}/>;
    </div>
  );
}
}
const steps = [
  {
    selector: '[data-tut="reactour__copy"]',
    content: 'Thank You For Visiting My PortFolio , Please Give Feedback if You like My Work It Will Hardly Take 30 sec (Bottom Right Side Corner of Screen )',
  }
]

export default App;
