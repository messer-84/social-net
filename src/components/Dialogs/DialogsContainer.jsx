import {connect} from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from '../../redux/dialogsReducer'
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
};

let mapDispatchToProps =  {
    addMessage: addMessageActionCreator,
    newMessageChange: updateNewMessageTextActionCreator
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Dialogs);
