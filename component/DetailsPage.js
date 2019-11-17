import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withTranslation } from '../i18n'
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(8),
  },
  margin: {
    margin: theme.spacing(1),
  },
  spacingTop: {
    marginTop: '15px'
  }
}));

const DetailsPage = (props) => {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const { t } = props;
  const { responseObject } = props.config.config;
  const details = ((responseObject || {}).venue || {});
  console.log(responseObject, "responseObject")
  return (
    <Grid container item xs={12} spacing={spacing} className={classes.spacingTop}>
      <Grid xs={6} item>
        <Grid xs={8} item>
          <Typography variant="h5" component="h1" gutterBottom>{details.name}</Typography>
        </Grid>
        <Grid container xs={12} item spacing={spacing}>
          <Grid xs={5} item>
            <Typography variant="subtitle1" gutterBottom>
              <strong>{t('meetingSapce')}</strong>
            </Typography>
            <Typography variant="button" gutterBottom>{details.meeting_space} {t('sqUnit')}</Typography>
          </Grid>
          <Grid xs={5} item>
            <Typography variant="subtitle1" gutterBottom>
            <strong>{t('capacity')}</strong>
            </Typography>
            <Typography variant="button" gutterBottom>{details.capacity}</Typography>
          </Grid>
          <Grid xs={5} item>
            <Typography variant="subtitle1" gutterBottom>
            <strong>{t('totalRooms')}</strong>
            </Typography>
            <Typography variant="button" gutterBottom>{details.total_rooms}</Typography>
          </Grid>
          <Grid xs={5} item>
            <Typography variant="subtitle1" gutterBottom>
            <strong>{t('footFall')}</strong>
            </Typography>
            <Typography variant="button" gutterBottom>{details.foot_fall}</Typography>
          </Grid>

        </Grid>
      </Grid>
      <Grid xs={6} item>
        <Grid container
          direction="row"
          justify="flex-end"
          alignItems="baseline"
        >
          <Button variant="contained" size="large" color="primary" className={classes.margin}>
            {t("addToEvent")}
          </Button>
        </Grid>

      </Grid>
    </Grid>
  )
}

const mapStateToProps = state => {
  return { config: state }
}

DetailsPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(connect(mapStateToProps, null)(DetailsPage))