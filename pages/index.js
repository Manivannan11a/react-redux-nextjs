import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ComponentIndexPage from '../component/Index';
import { withRedux } from '../lib/redux';
import { getConfig } from '../lib/action/AppAction'
import { i18n, Link, withTranslation } from '../i18n'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

// import { withI18next } from "../lib/withI18next";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Index = (props) => {
  console.log(props, "props")
  const { t, getConfig } = props;
  
  useEffect(() => {
    getConfig()
  }, [])

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
        <button
          type='button'
          onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
          {t('change-locale')}
        </button>
        
        {t('title')} - {process.env.REACT_APP_API_HOST}
        </Typography>
        <ComponentIndexPage t={t}/>
        <Copyright />
      </Box>
    </Container>
  );
}

Index.getInitialProps = ({ reduxStore }) => {
  const { dispatch } = reduxStore;

  dispatch(getConfig())

  return {
    namespacesRequired: ['common']
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => {
  return {
    getConfig: bindActionCreators(getConfig, dispatch)
  }
}
// const mapStateToProps = state => {
//   return {config: state}
// }

export default withTranslation('common')(withRedux(connect(null, mapDispatchToProps)(Index)))
