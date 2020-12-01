import React from 'react';
import '../style/Buttons.css';
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import ForumIcon from '@material-ui/icons/Forum';
import SettingsIcon from '@material-ui/icons/Settings';

function Buttons() {
  return (
    <div className="header">
      <IconButton className="Buttons__stretch">
        <AccessibilityNewIcon fontSize="large" />
      </IconButton>
      <IconButton className="Buttons__music">
        <MusicNoteIcon fontSize="large" />
      </IconButton>
      <IconButton className="Buttons__settings">
        <SettingsIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Buttons;
