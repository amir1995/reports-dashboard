
type TTableProps = {
  Header: string;
  accessor: string;
};

export const allP_allGColumn: TTableProps[] = [
  {
    Header: 'Date',
    accessor: 'modified',
  },
  {
    Header: 'Gateway',
    accessor: 'gatewayId',
  },
  {
    Header: 'Transaction ID',
    accessor: 'paymentId',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
];

export const normalTableColumn: TTableProps[] = [
  {
    Header: 'Date',
    accessor: 'modified',
  },
  {
    Header: 'Transaction ID',
    accessor: 'paymentId',
  },
  {
    Header: 'Amount',
    accessor: 'amount',
  },
];
