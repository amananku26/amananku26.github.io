import "./App.css";
import {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/homePage/Feedback"
import HomePage from "./components/homePage/HomePage";
import ScrollArrow from "./Scroll.jsx"
import Cookies from 'js-cookie' 

class App extends Component {
  constructor(){
    
    super()
    this.state = {
      isTourOpen : true,
      isShowingMore: false,
      countData:0,
      status:false,
      isLoading:true
    }

  }

  componentDidMount(){
  // window.location.href = 'https://linktr.ee/amananku26'  
  this.setState({isLoading:false})  

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
  if(this.state.isLoading){
     console.log(" countData",this.state.countData) 
    
        
    return <div>Loadind....</div>
  }  else {
    console.log(" countData",this.state.countData) 
 
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
      {/* <Tour
       steps={steps}
       isOpen={this.state.isTourOpen}
      //  maskClassName="mask"
       className="helper"
        rounded={5}
       onRequestClose={this.closeTour}/>; */}
    </div>
  );
}}
}

export default App;
