import { ICustomer, NewCustomer } from './customer.model';

export const sampleWithRequiredData: ICustomer = {
  id: 30838,
};

export const sampleWithPartialData: ICustomer = {
  id: 4009,
  firstName: 'Sanford',
  email: 'Eric_Stokes-Hamill70@hotmail.com',
};

export const sampleWithFullData: ICustomer = {
  id: 22549,
  firstName: 'Colten',
  lastName: 'Nienow-Larkin',
  email: 'Colin_Bogisich3@hotmail.com',
  telephone: '(647) 923-7820 x02516',
};

export const sampleWithNewData: NewCustomer = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
