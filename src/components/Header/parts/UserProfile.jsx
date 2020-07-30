import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'react-bootstrap';
import { ReactComponent as Logout } from '../../../assets/img/header/logout.svg';
import { ReactComponent as User } from '../../../assets/img/header/user.svg';

// import ButtonDropdown from '../../common/Button/ButtonDropdown';

import css from './UserProfile.module.scss';

const UserProfile = ({ user }) => {
  // console.log(user);
  return (
    <div className={`${css.wrapUserProfile}`}>
      <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
          {user.name}
        </Dropdown.Toggle>

        <Dropdown.Menu className={css.menu}>
          <p className={css.menuTitle}>Equantive Inc. #235</p>
          <Dropdown.Divider />
          <Dropdown.Item className={css.item} href="#/action-1">
            <User className={css.icon} />
            <span> Profile</span>
          </Dropdown.Item>
          <Dropdown.Item className={css.item} href="#/action-2">
            <Logout className={css.icon} />
            <span> Logout</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;

// class UserProfile extends Component {
//   static propTypes = {
//     user: PropTypes.shape({
//       name: PropTypes.string.isRequired,
//     }),
//   };

//   static defaultProps = {
//     user: null,
//   };

//   state = { isOpen: false };

//   toggleOpen = () => {
//     this.setState(state => ({ isOpen: !state.isOpen }));
//   };

//   render() {
//     const { isOpen } = this.state;
//     const { user } = this.props;

//     return (
//       <>
//         <ButtonDropdown
//           isOpen={isOpen}
//           onClose={this.toggleOpen}
//           target={
//             <button
//               title="Equantive Inc. #235"
//               className={css.btn}
//               type="button"
//               onClick={this.toggleOpen}
//             >
//               {user.name}
//             </button>
//           }
//         >
//           <div className={css.wrapProfileSettings}>
//             <p>Equantive Inc. #235</p>
//             <a href="#/action-1">Profile</a>
//             <a href="#/action-1">Logout</a>
//           </div>
//         </ButtonDropdown>
//       </>
//     );
//   }
// }

// export default UserProfile;
