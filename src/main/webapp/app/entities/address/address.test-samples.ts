import { IAddress, NewAddress } from './address.model';

export const sampleWithRequiredData: IAddress = {
  id: 15500,
  postcode: 'noodle yip',
  country: 'Ky',
};

export const sampleWithPartialData: IAddress = {
  id: 4708,
  address1: 'anguished whoa',
  address2: 'strictly',
  city: 'National City',
  postcode: 'popularise',
  country: 'Ug',
};

export const sampleWithFullData: IAddress = {
  id: 19538,
  address1: 'yowza',
  address2: 'inasmuch gah',
  city: 'Port Malliemouth',
  postcode: 'officially',
  country: 'No',
};

export const sampleWithNewData: NewAddress = {
  postcode: 'psst meanw',
  country: 'Mo',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
