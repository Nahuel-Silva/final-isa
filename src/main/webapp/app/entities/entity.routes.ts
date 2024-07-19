import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'jhipsterApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'category',
    data: { pageTitle: 'jhipsterApp.category.home.title' },
    loadChildren: () => import('./category/category.routes'),
  },
  {
    path: 'product',
    data: { pageTitle: 'jhipsterApp.product.home.title' },
    loadChildren: () => import('./product/product.routes'),
  },
  {
    path: 'customer',
    data: { pageTitle: 'jhipsterApp.customer.home.title' },
    loadChildren: () => import('./customer/customer.routes'),
  },
  {
    path: 'address',
    data: { pageTitle: 'jhipsterApp.address.home.title' },
    loadChildren: () => import('./address/address.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
