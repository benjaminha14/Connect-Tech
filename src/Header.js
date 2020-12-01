import React from 'react';
import './style/Header.css';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './style/Buttons.css';
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom';

function Header() {
  const [anchorEl_resources, setAnchorEl_resources] = React.useState(null);
  const history = useHistory();

  const handleClick_resources = (event) => {
    setAnchorEl_resources(event.currentTarget);
  };

  const handleClose_resources = () => {
    setAnchorEl_resources(null);
  };

  return (
    <Router>
      <div className="header">
        {/* ######################################################################## */}

        <IconButton
          className="Buttons__back"
          component={Link}
          to="/"
          onClick={() => history.push('/')}
        >
          <HomeIcon fontSize="large" />
        </IconButton>

        <IconButton
          className="Buttons__stretch"
          component={Link}
          to="/YogaCards"
          onClick={() => history.push('/YogaCards')}
        >
          <AccessibilityNewIcon fontSize="large" />
        </IconButton>

        {/* ######################################################################## */}

        {/* <IconButton className="Buttons__settings">
          <SettingsIcon fontSize="large" />
        </IconButton>

        ######################################################################## */}

        <IconButton>
          <ForumIcon
            fontSize="large"
            className="header__icon"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick_resources}
          />

          <Menu
            id="simple-menu"
            anchorEl={anchorEl_resources}
            keepMounted
            open={Boolean(anchorEl_resources)}
            onClose={handleClose_resources}
          >
            <MenuItem onClick={handleClose_resources}>
              Additional Resources
            </MenuItem>
            <MenuItem onClick={handleClose_resources}></MenuItem>
            <MenuItem onClick={handleClose_resources}>Meet the team</MenuItem>
          </Menu>
        </IconButton>
      </div>
    </Router>
  );
}

export default Header;
