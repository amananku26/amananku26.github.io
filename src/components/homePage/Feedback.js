import React,{Component} from "react"
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
import "./Feeder.css"

class Feed extends Component {
  render() {
    const { openTour, isShowingMore, toggleShowMore,dddd } = this.props
    Feedback.defaultProps = {
      email: true,
      emailRequired: true,
      emailDefaultValue: "",
      projectName: "",
      subProject: "",
      primaryColor: dddd ? 'Yellow' :'white',
      textColor: "black",
      hoverBorderColor: "#000000",
      postSubmitButtonMsg: "Thanks!",
      submitButtonMsg: "Send Feedback",
      feedbackTypes: ["general", "bug", "idea"],
      zIndex: "100000000"
    };
    return <span><Feedback projectId="6028a50ea0752f0004fb743a" classname = 'frf-feedback-container'/></span>;
  }
}

export default Feed