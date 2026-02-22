// components/TransactionsTable.jsx
import React from 'react';

const TransactionsTable = ({ transactions = [] }) => {
    const defaultTransactions = [
        {
            id: 'DRRY-001214',
            businessName: 'Juan Dela Cruz',
            documentType: 'Barangay Clearance',
            amountPaid: '150.00',
            status: 'Processing',
            dateTime: '02/01/2026, 10:45 AM',
        },
        {
            id: 'DRRY-001233',
            businessName: 'Juan Dela Cruz',
            documentType: 'Barangay Clearance',
            amountPaid: '150.00',
            status: 'Processing',
            dateTime: '02/01/2026, 10:48 AM',
        },
        {
            id: 'DRRY-001232',
            businessName: 'Juan Dela Cruz',
            documentType: 'Barangay Clearance',
            amountPaid: '150.00',
            status: 'Processing',
            dateTime: '02/01/2026, 10:48 AM',
        },
        {
            id: 'DRRY-001230',
            businessName: 'Juan Dela Cruz',
            documentType: 'Barangay Clearance',
            amountPaid: '150.00',
            status: 'Processing',
            dateTime: '02/01/2026, 10:48 AM',
        },
        {
            id: 'DRRY-001224',
            businessName: 'Juan Dela Cruz',
            documentType: 'Barangay Clearance',
            amountPaid: '150.00',
            status: 'Processing',
            dateTime: '02/01/2026, 10:48 AM',
        },
    ];

    const displayTransactions = transactions.length > 0 ? transactions : defaultTransactions;

    const getStatusBadge = (status) => {
        const statusLower = status.toLowerCase();
        if (statusLower === 'processing') {
            return <span className="badge badge-warning">Processing</span>;
        } else if (statusLower === 'processed') {
            return <span className="badge badge-success">Processed</span>;
        }
        return <span className="badge badge-info">{status}</span>;
    };

    const handleViewTransaction = (transaction) => {
        console.log('Viewing transaction:', transaction);
        alert(`Viewing transaction: ${transaction.id}\nResident: ${transaction.businessName}\nDocument: ${transaction.documentType}\nAmount: ₱${transaction.amountPaid}`);
    };

    return (
        <div style={{ overflowX: 'auto' }}>
            <table className="table">
                <thead>
                    <tr>
                        <th><input type="checkbox" className="checkbox" /></th>
                        <th>Business Name</th>
                        <th>Document Type</th>
                        <th>Amount Paid</th>
                        <th>Status</th>
                        <th>Date & Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {displayTransactions.map((transaction, index) => (
                        <tr key={index}>
                            <td><input type="checkbox" className="checkbox" /></td>
                            <td>{transaction.businessName}</td>
                            <td>{transaction.documentType}</td>
                            <td>₱{transaction.amountPaid}</td>
                            <td>{getStatusBadge(transaction.status)}</td>
                            <td>{transaction.dateTime}</td>
                            <td>
                                <button 
                                    className="btn btn-primary btn-sm"
                                    onClick={() => handleViewTransaction(transaction)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsTable;
