import React, { useEffect, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ComponentIndexPage from '../component/Index';
import { withRedux } from '../lib/redux';
import { getConfig } from '../lib/action/AppAction';
import { i18n, Link, withTranslation } from '../i18n';
import Header from '../component/Header';
import DetailsPage from '../component/DetailsPage';
import Amenities from '../component/Amenities';
import TableDetails from '../component/TableDetails';


const Index = (props) => {
  const { t, getConfig } = props;

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <Fragment>
      <Header/>
      <Container>
        <ComponentIndexPage />
        <DetailsPage />
        <Amenities />
        <TableDetails />
      </Container>
    </Fragment>
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
