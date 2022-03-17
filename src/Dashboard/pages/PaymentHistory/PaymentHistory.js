import { ActionButton, HistoryTable } from './PaymentHistory.styled';

const PaymentHistory = () => {
  const columns = [
    {
      width: '10%',
      name: 'No',
      selector: (row) => row.no,
      sortable: true,
    },
    {
      width: '20%',
      name: 'Trans ID',
      selector: (row) => row.transid,
      sortable: true,
    },
    {
      width: '15%',
      name: 'Amount',
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      width: '15%',
      name: 'Payment <br/> Method',
      selector: (row) => row.payment_method,
      sortable: true,
    },
    {
      width: '15%',
      name: 'Date',
      selector: (row) => row.date,
      sortable: true,
    },
    {
      width: '15%',
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: () => <ActionButton>Export</ActionButton>,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const data = [
    {
      id: 1,
      no: '1',
      transid: 'TN123456',
      amount: '1988',
      payment_method: 'Online',
      date: '23-Nov-2021',
      status: 'Paid',
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
        background: '#f5f5f5',
      },
    },
    headCells: {
      style: {
        background: '#131D40',
        color: '#fff',
        fontSize: '1.2rem',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
        fontSize: '1rem',
      },
    },
  };
  return (
    <div>
      {/* <h1>Payment History Page</h1> */}
      <HistoryTable columns={columns} data={data} customStyles={customStyles} />
    </div>
  );
};

export default PaymentHistory;
