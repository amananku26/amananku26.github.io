import React,{Component} from "react"
import Feedback from "feeder-react-feedback"; // import Feedback component
import "feeder-react-feedback/dist/feeder-react-feedback.css"; // import stylesheet
import "./Feeder.css"

class Feed extends Component {
  render() {
    return <Feedback projectId="6028a50ea0752f0004fb743a" />;
  }
}
Feedback.defaultProps = {
    email: true,
    emailRequired: true,
    emailDefaultValue: "",
    projectName: "",
    subProject: "",
    primaryColor: "white",
    textColor: "black",
    hoverBorderColor: "#000000",
    postSubmitButtonMsg: "Thanks!",
    submitButtonMsg: "Send Feedback",
    feedbackTypes: ["general", "bug", "idea"],
    zIndex: "100000000"
  };

export default Feed