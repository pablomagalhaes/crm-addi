import React, { FC } from 'react';

import Table from '@/components/table/Table.component';
import { LeadModel } from '@/models/Lead.model';
import Lead from './Lead.component';

type LeadsProps = {
  leads: LeadModel[];
};

const Leads: FC<LeadsProps> = ({ leads }) => (
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
        <th>Validation</th>
      </tr>
    </thead>

    <tbody>
      {leads.map(lead => (
        <Lead key={`lead-${lead.nationalIdNumber}`} lead={lead} />
      ))}
    </tbody>
  </Table>
);

export default Leads;
