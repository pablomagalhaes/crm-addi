import React, { FC } from 'react';

import Table from '@/components/table/Table.component';
import { ProspectorModel } from '@/models/Prospector.model';
import Prospector from './Prospector.component';

type ProspectorsProps = {
  prospectors: ProspectorModel[];
};

const Prospectors: FC<ProspectorsProps> = ({ prospectors }) => (
  <Table>
    <thead>
      <tr>
        <th style={{ textAlign: 'right' }}>Id</th>
        <th>Name</th>
        <th>ID</th>
        <th>Birthdate</th>
        <th>E-mail</th>
        <th style={{ textAlign: 'center' }}>National Registry</th>
        <th style={{ textAlign: 'center' }}>Judicial</th>
        <th style={{ textAlign: 'center' }}>Score</th>
      </tr>
    </thead>

    <tbody>
      {prospectors.map(prospector => (
        <Prospector
          key={`prospector-${prospector.nationalIdNumber}`}
          prospector={prospector}
        />
      ))}
    </tbody>
  </Table>
);

export default Prospectors;
