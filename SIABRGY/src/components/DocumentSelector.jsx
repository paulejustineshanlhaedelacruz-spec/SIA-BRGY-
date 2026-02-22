// components/DocumentSelector.jsx
import React, { useState } from 'react';

const DocumentSelector = ({ onSelectDocument, onProceed }) => {
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const documents = [
        {
            id: 1,
            title: 'BARANGAY CLEARANCE FOR INDIVIDUAL',
            description: 'Official document certifying a resident has no derogatory record in the barangay',
            fee: '₱50.00',
            isFree: false,
            icon: '📋',
        },
        {
            id: 2,
            title: 'BARANGAY RESIDENCY CERTIFICATE',
            description: 'Proof that an individual is a resident and bonafide member of the barangay',
            fee: '₱50.00',
            isFree: false,
            icon: '🏠',
        },
        {
            id: 3,
            title: 'BARANGAY INDIGENCY CERTIFICATE FOR INDIGENT PERSON/S',
            description: 'Certifies the economic status of applicants incapable to meet social services',
            fee: 'FREE',
            isFree: true,
            icon: '🤝',
        },
        {
            id: 4,
            title: 'CERTIFICATE OF GOOD MORAL CHARACTER',
            description: 'Attests to the good character and upright standing of a resident',
            fee: '₱50.00',
            isFree: false,
            icon: '⭐',
        },
        {
            id: 5,
            title: 'BARANGAY CERTIFICATE FOR LOW INCOME/NO INCOME',
            description: 'Certifies the financial status of a resident for financial assistance',
            fee: 'FREE',
            isFree: true,
            icon: '📊',
        },
        {
            id: 6,
            title: 'BARANGAY CERTIFICATE FOR FIRST TIME JOBSEEKER AND OATH OF UNDERTAKING',
            description: 'Issued to new graduates and jobseekers as per government document requirement',
            fee: 'FREE',
            isFree: true,
            icon: '📃',
        },
        {
            id: 7,
            title: 'BARANGAY CERTIFICATIONS FOR INDIVIDUAL/S',
            description: 'A general certification issued and required as proof at application for legal age',
            fee: '₱50.00',
            isFree: false,
            icon: '✅',
        },
        {
            id: 8,
            title: 'BARANGAY CERTIFICATIONS FOR OTHER GOVERNMENT/PRIVATE AGENCY',
            description: 'Specifically addressed to institutions, agencies, GOOs, and private entities',
            fee: '₱50.00',
            isFree: false,
            icon: '🏛️',
        },
        {
            id: 9,
            title: 'BARANGAY CLEARANCE FOR ELECTRIC/WATER/INTERNET',
            description: 'A provable requirement for the installation of utilities and services',
            fee: '₱50.00',
            isFree: false,
            icon: '⚡',
        },
    ];

    const filteredDocuments = documents.filter(doc =>
        doc.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSelectDocument = (doc) => {
        setSelectedDocument(doc);
        onSelectDocument(doc);
    };

    return (
        <div>
            {/* Reference illustration for step 2 - drop an image named `step2-reference.png` into `public/images` */}
            <div className="step2-reference-container">
                <img
                    src="/images/step2-reference.png"
                    alt="Reference for Step 2 Document Selection"
                    className="step2-reference"
                />
            </div>

            {/* Search */}
            <div className="form-group" style={{ marginBottom: 'var(--spacing-lg)' }}>
                <div className="form-input-wrapper">
                    <input
                        type="text"
                        className="input-field"
                        placeholder="Search documents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Document Cards Grid */}
            <div className="document-grid">
                {filteredDocuments.map((doc) => (
                    <div
                        key={doc.id}
                        className={`document-card ${
                            selectedDocument?.id === doc.id ? 'selected' : ''
                        }`}
                        onClick={() => handleSelectDocument(doc)}
                    >
                        <div className="document-icon">{doc.icon}</div>
                        <div className="document-title">{doc.title}</div>
                        <div className="document-description">{doc.description}</div>
                        <div className={`document-fee ${doc.isFree ? 'free' : 'paid'}`}>
                            {doc.fee}
                        </div>
                        <button className="btn btn-primary btn-sm">
                            Select Document
                        </button>
                    </div>
                ))}
            </div>

            {/* Action Buttons */}
            {selectedDocument && (
                <div className="form-actions" style={{ marginTop: 'var(--spacing-lg)' }}>
                    <button className="btn btn-secondary">Cancel</button>
                    <button className="btn btn-primary" onClick={onProceed}>
                        Next Step
                    </button>
                </div>
            )}
        </div>
    );
};

export default DocumentSelector;
