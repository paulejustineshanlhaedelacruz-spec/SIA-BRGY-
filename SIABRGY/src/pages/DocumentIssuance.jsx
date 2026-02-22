import React, { useState, useMemo } from 'react';
import ProgressIndicator from '../components/ProgressIndicator';
import ResidentSelector from '../components/ResidentSelector';
import DocumentSelector from '../components/DocumentSelector';

const DocumentIssuance = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedResident, setSelectedResident] = useState(null);
    const [selectedDocument, setSelectedDocument] = useState(null);

    // additional form state for the flow
    const [purpose, setPurpose] = useState('');
    const [remarks, setRemarks] = useState('');
    const [amountReceived, setAmountReceived] = useState('');

    // control number and issue date fixed once a document is chosen
    const [controlNumber] = useState(() => `BRGY-${Math.floor(Math.random() * 9000) + 1000}`);
    const issueDate = useMemo(() => new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }), []);

    const handleSelectResident = (resident) => {
        setSelectedResident(resident);
    };

    // when the 'Next Step' button is clicked we may not yet have the
    // updated state value for `selectedResident` (state updates are
    // asynchronous).  Accepting the resident object directly from the
    // child guarantees the check is accurate.
    const handleProceedFromResident = (resident) => {
        if (resident && resident.status !== 'BLOCKED') {
            // make sure the parent state is in sync as well
            setSelectedResident(resident);
            setCurrentStep(2);
        }
    };

    const handleSelectDocument = (doc) => {
        setSelectedDocument(doc);
    };

    const handleProceedFromDocument = () => {
        if (selectedDocument) setCurrentStep(3);
    };

    return (
        <div className="page-content">
            <div className="page-header">
                <h1>
                    Document Issuance
                    {selectedResident?.status === 'BLOCKED' && (
                        <span style={{ fontSize: '0.8rem', marginLeft: '0.5rem', color: 'var(--danger-red)' }}>
                            (Status BLOCKED - cannot proceed to step 2)
                        </span>
                    )}
                </h1>
                <p>Issue documents with payment verification</p>
            </div>

            <ProgressIndicator currentStep={currentStep} />


            <div className="form-section">
                {currentStep === 1 && (
                    <>
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2>Select Resident</h2>
                            <p style={{ color: 'var(--text-gray)', marginBottom: 0 }}>
                                Choose a resident to proceed with document issuance
                            </p>
                        </div>
                        <ResidentSelector
                            onSelectResident={handleSelectResident}
                            onProceed={handleProceedFromResident}
                        />
                    </>
                )}

                {currentStep === 2 && (
                    <>
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2>Choose Document</h2>
                            <p style={{ color: 'var(--text-gray)', marginBottom: 0 }}>
                                Selected: <strong>{selectedResident?.name}</strong>
                            </p>
                        </div>
                        <DocumentSelector
                            onSelectDocument={handleSelectDocument}
                            onProceed={handleProceedFromDocument}
                        />
                    </>
                )}

                {currentStep === 3 && (
                    <>
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2>Details & Fees</h2>
                            <p style={{ color: 'var(--text-gray)', marginBottom: 0 }}>
                                Review and confirm the details below
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h3>Selected Document: {selectedDocument?.title}</h3>
                                <p>
                                    <strong>Control Number:</strong> {controlNumber}
                                </p>
                                <p>
                                    <strong>Issued On:</strong> {issueDate}
                                </p>
                                <p>
                                    <strong>Full Name:</strong> {selectedResident?.name}
                                </p>
                                <p>
                                    <strong>Address:</strong> {selectedResident?.address}
                                </p>
                                <p>
                                    <strong>Date of Birth:</strong> {selectedResident?.birthDate}
                                </p>
                                <p>
                                    <strong>Purpose:</strong>{' '}
                                    <input
                                        type="text"
                                        className="input-field"
                                        value={purpose}
                                        onChange={(e) => setPurpose(e.target.value)}
                                        placeholder="Enter Purpose"
                                        style={{ width: '100%' }}
                                    />
                                </p>
                                <p>
                                    <strong>Remarks:</strong>{' '}
                                    <textarea
                                        className="input-field"
                                        value={remarks}
                                        onChange={(e) => setRemarks(e.target.value)}
                                        placeholder="Enter Remarks"
                                        style={{ width: '100%', height: '80px' }}
                                    />
                                </p>
                                <div className="fee-summary" style={{ marginTop: 'var(--spacing-md)' }}>
                                    <strong>Fee:</strong> {selectedDocument?.fee}
                                </div>
                            </div>
                            <div className="form-actions">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setCurrentStep(2)}
                                >
                                    Back
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setCurrentStep(4)}
                                    disabled={!purpose}
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {currentStep === 4 && (
                    <>
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2>Payment</h2>
                            <p style={{ color: 'var(--text-gray)', marginBottom: 0 }}>
                                Complete your payment to proceed
                            </p>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <p>
                                    <strong>Total Amount Due:</strong>{' '}
                                    {selectedDocument?.fee}
                                </p>
                                <p>
                                    <strong>Amount Received:</strong>{' '}
                                    <input
                                        type="number"
                                        className="input-field"
                                        value={amountReceived}
                                        onChange={(e) => setAmountReceived(e.target.value)}
                                        style={{ width: '120px' }}
                                    />
                                </p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-gray)' }}>
                                    Collected by: Admin
                                </p>
                            </div>
                            <div className="form-actions">
                                <button
                                    className="btn btn-secondary"
                                    onClick={() => setCurrentStep(3)}
                                >
                                    Back
                                </button>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => setCurrentStep(5)}
                                    disabled={parseFloat(amountReceived) < parseFloat(selectedDocument?.fee.replace(/[^0-9.]/g, ''))}
                                >
                                    Confirm Payment
                                </button>
                            </div>
                        </div>
                    </>
                )}

                {currentStep === 5 && (
                    <>
                        <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                            <h2>Preview & Issue</h2>
                            <p style={{ color: 'var(--text-gray)', marginBottom: 0 }}>
                                Review the document before issuing
                            </p>
                        </div>
                        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
                            <div style={{ flex: 1 }}>
                                <div
                                    style={{
                                        border: '1px solid var(--border-gray)',
                                        height: '400px',
                                        backgroundColor: 'white',
                                        overflow: 'auto'
                                    }}
                                >
                                    {/* placeholder for PDF preview */}
                                    <p style={{ textAlign: 'center', paddingTop: '180px', color: 'var(--text-gray)' }}>
                                        Document preview would appear here
                                    </p>
                                </div>
                            </div>
                            <div style={{ width: '200px' }}>
                                <div className="form-actions" style={{ flexDirection: 'column', alignItems: 'stretch' }}>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setCurrentStep(4)}
                                    >
                                        Back
                                    </button>
                                    <button
                                        className="btn btn-success"
                                        onClick={() => alert('Document issued successfully!')}
                                    >
                                        Issue Document
                                    </button>
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => window.print()}
                                    >
                                        Print Document
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => setCurrentStep(1)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default DocumentIssuance;
