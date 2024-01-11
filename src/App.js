import "./App.css";
import {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/homePage/Feedback"
import HomePage from "./components/homePage/HomePage";
import ScrollArrow from "./Scroll.jsx"
import firebase from "firebase"
import db from "./firebase"
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
  window.location.href = 'https://linktr.ee/amananku26'  
  this.setState({isLoading:false})  
  const getFromFirebase = firebase.firestore().collection("count");
  getFromFirebase.onSnapshot((querySnapShot) => {
    const saveFirebaseTodos = [];
    querySnapShot.forEach((doc) => {
      doc.id === 'zmTUjbygQRgOvBlyIiH2' && saveFirebaseTodos.push( doc.data());
       
    });
    Cookies.set('persist-pagecount', saveFirebaseTodos[0].countnum+1)
    this.setState({countData:saveFirebaseTodos[0].countnum,status:true})
   });
   const Pdata = Number(Cookies.get('persist-pagecount'))
   if(Pdata && Pdata > 1){
      db.collection('count').doc('zmTUjbygQRgOvBlyIiH2').set({
       "countnum": Pdata
     }, { merge: true })
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
