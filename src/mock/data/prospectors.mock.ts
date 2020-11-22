import { ProspectorDto } from '@/models/Prospector.model';

export const prospectors: ProspectorDto[] = [
  {
    firstName: 'Mestre',
    lastName: 'Yoda',
    nationalIdNumber: '12345678',
    birthdate: '1980-02-01',
    email: 'yoda@gmail.com',

    existsInRegisty: true,
    matchWithRegisty: true,
    hasJudicialRecord: false,
    score: 90,
  },
];
