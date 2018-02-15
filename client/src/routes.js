/**
 * Created by Henry Huang.
 */
import React from 'react';
import adminRoute from './admin/routes';
import defaultRoute from './default/routes';

const routes = defaultRoute.concat(adminRoute);

export default routes;