import React, { useState } from 'react';
import { submitAuditReport, getComplianceStatus } from '../../services/api';

const AuditCompliance = () => {
  const [auditReport, setAuditReport] = useState(null);
    const [complianceStatus, setComplianceStatus] = useState('');

      const handleUpload = async (e) => {
          setAuditReport(e.target.files[0]);
            };

              const handleSubmit = async () => {
                  try {
                        await submitAuditReport(auditReport);
                              const status = await getComplianceStatus();
                                    setComplianceStatus(status);
                                          alert('Audit report submitted successfully.');
                                              } catch (error) {
                                                    console.error(error);
                                                          alert('Error submitting audit report.');
                                                              }
                                                                };

                                                                  return (
                                                                      <div>
                                                                            <h1>Audit and Compliance</h1>
                                                                                  <input type="file" onChange={handleUpload} />
                                                                                        <button onClick={handleSubmit}>Submit Report</button>
                                                                                              {complianceStatus && <p>Compliance Status: {complianceStatus}</p>}
                                                                                                  </div>
                                                                                                    );
                                                                                                    };

                                                                                                    export default AuditCompliance;
                                                                                                    