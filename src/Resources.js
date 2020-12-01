import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>
            Get Immediate Help in a Crisis
          </Typography>
          <Typography className={classes.secondaryHeading}>Call 911</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            if you or someone you know is in immediate danger or go to the
            nearest emergency room.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>
            National Suicide Prevention Lifeline
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Call 1-800-273-TALK (8255); En Español 1-888-628-9454
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Lifeline is a free, confidential crisis hotline that is
            available to everyone 24 hours a day, seven days a week. The
            Lifeline connects callers to the nearest crisis center in the
            Lifeline national network. These centers provide crisis counseling
            and mental health referrals. People who are deaf, hard of hearing,
            or have hearing loss can contact the Lifeline via TTY at
            1-800-799-4889.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Crisis Text Line</Typography>
          <Typography className={classes.secondaryHeading}>
            Text “HELLO” to 741741
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Crisis Text hotline is available 24 hours a day, seven days a
            week throughout the U.S. The Crisis Text Line serves anyone, in any
            type of crisis, connecting them with a crisis counselor who can
            provide support and information.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>
            Veterans Crisis Line
          </Typography>
          <Typography className={classes.secondaryHeading}>
            Call 1-800-273-TALK (8255) and press 1 or text to 838255
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The Veterans Crisis Line is a free, confidential resource that
            connects veterans 24 hours a day, seven days a week with a trained
            responder. The service is available to all veterans, even if they
            are not registered with the VA or enrolled in VA healthcare. People
            who are deaf, hard of hearing, or have hearing loss can call
            1-800-799-4889.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
