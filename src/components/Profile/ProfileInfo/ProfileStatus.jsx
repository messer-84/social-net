import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status || ''
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.status !== this.props.status){
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {

    return (
      <div>
        {!this.state.editMode &&
        <div>
          <span onDoubleClick={this.activateEditMode}>Status: {this.props.status || 'xxx'}</span>
        </div>
        }
        {this.state.editMode &&
        <div>
          <input onChange={this.onStatusChange} type="text" value={this.state.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
        </div>
        }
      </div>
    )
  }

}

export default ProfileStatus;
