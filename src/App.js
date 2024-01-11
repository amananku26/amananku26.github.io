import "./App.css";
import {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/homePage/Feedback"
import HomePage from "./components/homePage/HomePage";
import ScrollArrow from "./Scroll.jsx"

class App extends Component {
  constructor(){
    
    super()
    this.state = {
      isTourOpen : true,
      isShowingMore: false,
      countData:0,
      status:false,
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
      <HomePage countData = {this.state.countData} />
      <Feed 
      data-tut="reactour__copy"
      dddd = {this.state.isTourOpen}
      openTour={this.openTour}
      toggleShowMore={this.toggleShowMore}
      isShowingMore={this.state.isShowingMore}
      />
      <ScrollArrow/>
    </div>
  );
}}


export default App;
