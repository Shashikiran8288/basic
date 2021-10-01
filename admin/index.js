const AdminBro = require('admin-bro');
// const adminBro = new AdminBro({
//   rootPath: '/',
// });


const { User, Product } = require('../server/models');
const { UserResource, ProductResource } = require('./resources');

const sidebarGroups = {
  user: {
    name: 'User Management',
    icon: 'User',
  },
  product: {
    name: 'Product Management',
    icon: 'Product'
  }
};


const adminBro = new AdminBro({
   rootPath: '/admin',
   loginPath: '/admin/login',
   resources:  [{
    resource: User,
    options: {
      ...UserResource,
      parent: sidebarGroups.user,
    }
  }, {
    resource: Product,
    options: {
      ...ProductResource,
      parent: sidebarGroups.product,
    }
  }
],
   branding: {
     companyName: 'AdminBro Tutorial',
     softwareBrothers: false,
   }
});

module.exports = adminBro;
