import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Main } from 'components';
import Fruits from './Fruits';
import Vegetables from './Vegetables';
import Delicacies from './Delicacies';
import Cart from './Cart';

const Page = () => {
  return (
    <Fragment>
      <Route path='/' exact component={Main} />
      <Route path='/fruits' component={Fruits} />
      <Route path='/vegetables' component={Vegetables} />
      <Route path='/delicacies' component={Delicacies} />
      <Route path='/cart' component={Cart} />
    </Fragment>
  );
}

export default Page;