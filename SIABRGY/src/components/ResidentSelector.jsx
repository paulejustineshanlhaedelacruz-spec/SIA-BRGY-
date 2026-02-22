// components/ResidentSelector.jsx
import React, { useState } from 'react';

const ResidentSelector = ({ onSelectResident, onProceed }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState(''); // cleared/blocked filter
    const [selectedResident, setSelectedResident] = useState(null);

    const residents = [
        {
            id: 1,
            name: 'Delta Cruz, Adrian M.',
            address: '427 Ilocanod Street, Mangyan Sulit, Cabanatuan City',
            birthDate: 'October 1, 1968',
            age: 56,
            civilStatus: 'Married',
            voterStatus: 'Registered Voter',
            status: 'CLEARED',
        },
        {
            id: 2,
            name: 'Delta Cruz, Juan C.',
            address: '428 Ilocanod Street, Mangyan Sulit, Cabanatuan City',
            birthDate: 'May 1, 1985',
            age: 41,
            civilStatus: 'Single',
            voterStatus: 'Registered Voter',
            status: 'BLOCKED',
            blockedReasons: ['Active Case', 'Theft', 'Blotter'],
        },
        {
            id: 3,
            name: 'Delta Cruz, Zian A.',
            address: '429 Ilocanod Street, Mangyan Sulit, Cabanatuan City',
            birthDate: 'June 24, 1970',
            age: 56,
            civilStatus: 'Married',
            voterStatus: 'Registered Voter',
            status: 'CLEARED',
        },
    ];

    const filteredResidents = residents.filter(resident => {
        const matchesSearch = resident.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = !filterStatus || resident.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const handleSelectResident = (resident) => {
        setSelectedResident(resident);
        onSelectResident(resident);
    };

    return (
        <div className="select-resident-container">
            <div className="form-section">
                {/* Search Box */}
                <div className="form-group">
                    <label className="form-label">Search</label>
                    <div className="form-input-wrapper">
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* Filter */}
                <div className="form-group" style={{ marginTop: 'var(--spacing-md)' }}>
                    <label className="form-label">Filter by Status</label>
                    <select
                        className="input-field"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="CLEARED">Cleared</option>
                        <option value="BLOCKED">Blocked</option>
                    </select>
                </div>

                {/* Results */}
                {filteredResidents.length > 0 ? (
                    <div className="resident-results">
                        <ul className="resident-list">
                            {filteredResidents.map((resident) => (
                                <li
                                    key={resident.id}
                                    className={`resident-item ${
                                        selectedResident?.id === resident.id ? 'selected' : ''
                                    }`}
                                    onClick={() => handleSelectResident(resident)}
                                >
                                    <div className="resident-avatar">
                                        {resident.name.charAt(0)}
                                    </div>
                                    <div className="resident-info">
                                        <div className="resident-name">{resident.name}</div>
                                        <div className="resident-address">{resident.address}</div>
                                        <div className="resident-details">
                                            <div className="resident-detail">
                                                <span className="resident-detail-label">Birth Date:</span>
                                                <span className="resident-detail-value">{resident.birthDate}</span>
                                            </div>
                                            <div className="resident-detail">
                                                <span className="resident-detail-label">Age:</span>
                                                <span className="resident-detail-value">{resident.age}</span>
                                            </div>
                                            <div className="resident-detail">
                                                <span className="resident-detail-label">Civil Status:</span>
                                                <span className="resident-detail-value">{resident.civilStatus}</span>
                                            </div>
                                            <div className="resident-detail">
                                                <span className="resident-detail-label">Voter's Status:</span>
                                                <span className="resident-detail-value">{resident.voterStatus}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="empty-state" style={{ padding: 'var(--spacing-lg)' }}>
                        <div className="empty-state-icon">🔍</div>
                        <div className="empty-state-title">No residents found</div>
                        <div className="empty-state-message">Try adjusting your search or filter</div>
                    </div>
                )}

                {/* Selected Resident Card */}
                {selectedResident && (
                    <div className={`resident-card ${selectedResident.status.toLowerCase()}`}>
                        <div className="resident-card-avatar">
                            {selectedResident.name.charAt(0)}
                        </div>
                        <div className="resident-card-content">
                            <div className="resident-card-header">
                                <div className="resident-card-name">{selectedResident.name}</div>
                                <div className="resident-card-badge">REGISTERED VOTER</div>
                            </div>
                            <div className="resident-card-address">{selectedResident.address}</div>
                            <div className="resident-card-details">
                                <div className="resident-card-detail">
                                    <div className="resident-card-detail-label">Birth Date</div>
                                    <div className="resident-card-detail-value">{selectedResident.birthDate}</div>
                                </div>
                                <div className="resident-card-detail">
                                    <div className="resident-card-detail-label">Age</div>
                                    <div className="resident-card-detail-value">{selectedResident.age}</div>
                                </div>
                                <div className="resident-card-detail">
                                    <div className="resident-card-detail-label">Civil Status</div>
                                    <div className="resident-card-detail-value">{selectedResident.civilStatus}</div>
                                </div>
                                <div className="resident-card-detail">
                                    <div className="resident-card-detail-label">Voter's Status</div>
                                    <div className="resident-card-detail-value">{selectedResident.voterStatus}</div>
                                </div>
                            </div>
                            <div className={`status-badge ${selectedResident.status.toLowerCase()}`}>
                                Status: {selectedResident.status}
                            </div>
                            {selectedResident.status === 'BLOCKED' && selectedResident.blockedReasons && (
                                <div className="blocked-reasons" style={{ marginTop: 'var(--spacing-sm)', color: 'var(--danger-red)', fontSize: '0.9rem' }}>
                                    Reason: {selectedResident.blockedReasons.join(' - ')}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Action Buttons */}
                {selectedResident && (
                    <>
                        <div className="form-actions">
                            <button className="btn btn-secondary">Cancel</button>
                            <button
                                className="btn btn-primary"
                                onClick={() => selectedResident.status !== 'BLOCKED' && onProceed(selectedResident)}
                                disabled={selectedResident.status === 'BLOCKED'}
                            >
                                Next Step
                            </button>
                        </div>
                        {/* reference images for the 'Next Step' section
                            place files named step1-reference-1.png and step1-reference-2.png
                            into public/images so they load correctly */}
                        <div className="step1-reference-gallery">
                            <img
                                src="/images/step1-reference-1.png"
                                alt="Step 1 reference 1"
                                className="step1-reference"
                            />
                            <img
                                src="/images/step1-reference-2.png"
                                alt="Step 1 reference 2"
                                className="step1-reference"
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResidentSelector;
