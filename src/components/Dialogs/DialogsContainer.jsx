import {connect} from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/dialogsReducer'
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps =  {
    addMessage: addMessageActionCreator,
    newMessageChange: updateNewMessageTextActionCreator
};


export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
