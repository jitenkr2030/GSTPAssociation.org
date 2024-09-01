import React, { useEffect, useState } from 'react';
import { getAnalyticsData } from '../../services/api';

const Analytics = () => {
  const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
              const result = await getAnalyticsData();
                    setData(result);
                        };
                            fetchData();
                              }, []);

                                if (!data) return <div>Loading...</div>;

                                  return (
                                      <div>
                                            <h1>Analytics Dashboard</h1>
                                                  <div>
                                                          <h2>Total Returns Filed</h2>
                                                                  <p>{data.totalReturnsFiled}</p>
                                                                        </div>
                                                                              <div>
                                                                                      <h2>Total Payments Made</h2>
                                                                                              <p>{data.totalPaymentsMade}</p>
                                                                                                    </div>
                                                                                                          <div>
                                                                                                                  <h2>Compliance Status</h2>
                                                                                                                          <p>{data.complianceStatus}</p>
                                                                                                                                </div>
                                                                                                                                      {/* Add more analytics data as needed */}
                                                                                                                                          </div>
                                                                                                                                            );
                                                                                                                                            };

                                                                                                                                            export default Analytics;
                                                                                                                                            