import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import Users from "./Users";
import Preloader from "../commons/Preloader/Preloader";
import {
  follow,
  setCurrentPageAC,
  unfollow,
  setTotalUsersCount,
  toggleFollowingProgress,
  requestUsers
} from "../../redux/usersReducer";
import {
  getUsers,
  getCurrentPage,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getFollowingInProgress
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.requestUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            pageSize={this.props.pageSize}
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
          />
        )}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  };
};

const mapDispatchToProps = {
  follow,
  unfollow,
  setTotalUsersCount,
  setCurrentPage: setCurrentPageAC,
  toggleFollowingProgress,
  requestUsers
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(UsersContainer);
