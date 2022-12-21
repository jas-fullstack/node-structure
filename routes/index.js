/*
*File Description : This file contain all routes that will export to app.js file.
*/
import user from './user/index.js';
import adminRoutes from './admin/index.js';
export default [
    user,
    adminRoutes
];