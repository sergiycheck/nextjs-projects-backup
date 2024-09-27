import { useQuery } from '@apollo/client';
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@shipfast/webapp-core/components/table';
import { mapConnection } from '@shipfast/webapp-core/utils/graphql';
import { FormattedMessage } from 'react-intl';

import { stripeAllChargesQuery } from '../../../routes/subscriptions/subscriptions.graphql';
import { TransactionHistoryEntry } from './transactionHistoryEntry';

export const TransactionHistory = () => {
  const { data } = useQuery(stripeAllChargesQuery, { fetchPolicy: 'cache-and-network' });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <FormattedMessage id="Stripe / Transaction history / Date" defaultMessage="Date" />
          </TableHead>
          <TableHead>
            <FormattedMessage id="Stripe / Transaction history / Description" defaultMessage="Description" />
          </TableHead>
          <TableHead>
            <FormattedMessage id="Stripe / Transaction history / Payment method" defaultMessage="Payment method" />
          </TableHead>
          <TableHead>
            <FormattedMessage id="Stripe / Transaction history / Amount" defaultMessage="Amount" />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {mapConnection((entry) => {
          return <TransactionHistoryEntry key={entry.id} entry={entry} />;
        }, data?.allCharges)}
      </TableBody>
    </Table>
  );
};
