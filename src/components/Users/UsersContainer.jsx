import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Users from './Users';
import Preloader from "../commons/Preloader/Preloader";
import {
  follow,
  setCurrentPageAC,
  unfollow,
  setTotalUsersCount,
  toggleFollowingProgress,
  getUsers
} from "../../redux/usersReducer";



class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> :
          <Users
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
          />}
      </>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setTotalUsersCount,
  setCurrentPage: setCurrentPageAC,
  toggleFollowingProgress,
  getUsers
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(UsersContainer);

