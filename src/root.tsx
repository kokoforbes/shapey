import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';

const Root = (props: any) => {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
};

export default Root