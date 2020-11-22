import { LeadDto } from '@/models/Lead.model';
import { persons } from './persons.mock';

const validLeads: LeadDto[] = persons.map(person => {
  const leadparams = {
    existsInRegisty: null,
    matchWithRegisty: null,
    hasJudicialRecord: null,
    score: 0,
  };

  if (person.firstName === 'Leia')
    return {
      firstName: 'Leia',
      lastName: 'Organa',
      nationalIdNumber: '19562016',
      birthdate: '1956-01-01',
      email: 'leiaorgana@gmail.com',

      ...leadparams,
    };

  return {
    ...person,
    ...leadparams,
  };
});

const invalidLeads: LeadDto[] = [
  {
    firstName: 'Padmé',
    lastName: 'Amidala',
    nationalIdNumber: '1956201666',
    birthdate: '1990-02-02',
    email: 'padme@gmail.com',

    existsInRegisty: null,
    matchWithRegisty: null,
    hasJudicialRecord: null,
    score: 0,
  }
];

export const leads: LeadDto[] = [...validLeads, ...invalidLeads];
