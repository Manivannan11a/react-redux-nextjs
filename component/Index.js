
import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withTranslation } from '../i18n'
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const ComponentIndexPage = (props) => {
  const [spacing, setSpacing] = React.useState(2);

  const classes = useStyles();
  const { t } = props;
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map(value => (
            <Grid key={value} item>
              <Paper className={classes.paper} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>

  );
}

const mapStateToProps = state => {
  return { config: state }
}

ComponentIndexPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(connect(mapStateToProps, null)(ComponentIndexPage));