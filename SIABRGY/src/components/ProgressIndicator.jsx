// components/ProgressIndicator.jsx
import React from 'react';

const ProgressIndicator = ({ currentStep = 1 }) => {
    const steps = [
        { number: 1, label: 'Select Resident' },
        { number: 2, label: 'Choose Document' },
        { number: 3, label: 'Details & Fees' },
        { number: 4, label: 'Payment' },
        { number: 5, label: 'Preview & Issue' },
    ];

    return (
        <div className="progress-indicator">
            <div className="progress-steps">
                {steps.map((step, index) => (
                    <div key={step.number} className="progress-step">
                        <div
                            className={`step-circle ${
                                step.number < currentStep
                                    ? 'completed'
                                    : step.number === currentStep
                                    ? 'active'
                                    : ''
                            }`}
                        >
                            {step.number < currentStep ? '✓' : step.number}
                        </div>
                        <div
                            className={`step-label ${
                                step.number === currentStep ? 'active' : ''
                            }`}
                        >
                            {step.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgressIndicator;
