import { connect } from 'react-redux';
import Servers from './servers';
import { fetchServers, createServer, joinServer } from '../../../actions/server_actions';
import { removeServerErrors } from '../../../actions/server_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  let onlineCount = 0;
  state.entities.friends.forEach(friendId => {
    if (state.entities.users[friendId] && state.entities.users[friendId].online) {
      onlineCount++;
    }
  });
  
  return {
    servers: Object.values(state.entities.servers),
    errors: state.errors.server,
    onlineCount,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    createServer: (formData) => dispatch(createServer(formData)),
    joinServer: (server) => dispatch(joinServer(server)),
    removeServerErrors: () => dispatch(removeServerErrors()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Servers));
