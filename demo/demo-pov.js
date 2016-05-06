// -*- coding: utf-8 -*-

import { connect } from 'react-redux';
import { Pov } from '../lib';

const mapStateToProps = (state) => {
  return {
    image: state.image
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const DemoPov = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pov);

export default DemoPov;
