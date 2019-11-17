import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ComponentIndexPage from '../component/Index';
import { withRedux } from '../lib/redux';
import { getConfig } from '../lib/action/AppAction';
import { i18n, Link, withTranslation } from '../i18n';
import Header from '../component/Header';
import Footer from '../component/Footer';


const Index = (props) => {
  console.log(props, 'props');
  const { t, getConfig } = props;

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <Container>
      <Header />
      <ComponentIndexPage t={t} />
      <Footer />
    </Container>
  );
};

Index.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getConfig: bindActionCreators(getConfig, dispatch),
});

export default withTranslation('common')(withRedux(connect(null, mapDispatchToProps)(Index)));
