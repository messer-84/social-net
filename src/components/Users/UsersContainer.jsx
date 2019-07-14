import {connect} from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setUsersAC,
  unfollowAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC
} from "../../redux/usersReducer";
import React from "react";
import Users from './Users';
import Preloader from "../commons/Preloader/Preloader";
import {usersAPI} from '../../api/api';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching();
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching();
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching();
    this.props.setCurrentPage(pageNumber);
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toggleIsFetching();
        this.props.setUsers(data.items)
      })
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
    isFetching: state.usersPage.isFetching
  }
};

const mapDispatchToProps = {
  follow: followAC,
  unfollow: unfollowAC,
  setUsers: setUsersAC,
  setTotalUsersCount: setTotalUsersCountAC,
  setCurrentPage: setCurrentPageAC,
  toggleIsFetching: toggleIsFetchingAC
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
