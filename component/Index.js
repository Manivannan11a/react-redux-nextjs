
import React, {useEffect} from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withTranslation } from '../i18n'


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

const ComponentIndexPage = (props) => {
  console.log(props, "chilsProps")
  const {t} = props;
  return <MyButton>{t('title')}</MyButton>;
}

const mapStateToProps = state => {
  return {config: state}
}

ComponentIndexPage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(connect(mapStateToProps, null)(ComponentIndexPage));