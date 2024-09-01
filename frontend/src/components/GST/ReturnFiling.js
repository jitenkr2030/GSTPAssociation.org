import React, { useState } from 'react';
import { submitReturnFiling } from '../../services/api';

const ReturnFiling = () => {
  const [gstin, setGstin] = useState('');
    const [period, setPeriod] = useState('');
      const [amount, setAmount] = useState('');
        const [status, setStatus] = useState(null);

          const handleSubmit = async () => {
              try {
                    const response = await submitReturnFiling({ gstin, period, amount });
                          setStatus(response.status);
                                alert('Return filed successfully.');
                                    } catch (error) {
                                          console.error(error);
                                                setStatus('Error in filing return');
                                                    }
                                                      };

                                                        return (
                                                            <div>
                                                                  <h1>GST Return Filing</h1>
                                                                        <input 
                                                                                type="text" 
                                                                                        placeholder="GSTIN" 
                                                                                                value={gstin} 
                                                                                                        onChange={(e) => setGstin(e.target.value)} 
                                                                                                              />
                                                                                                                    <input 
                                                                                                                            type="text" 
                                                                                                                                    placeholder="Period (YYYY-MM)" 
                                                                                                                                            value={period} 
                                                                                                                                                    onChange={(e) => setPeriod(e.target.value)} 
                                                                                                                                                          />
                                                                                                                                                                <input 
                                                                                                                                                                        type="number" 
                                                                                                                                                                                placeholder="Amount" 
                                                                                                                                                                                        value={amount} 
                                                                                                                                                                                                onChange={(e) => setAmount(e.target.value)} 
                                                                                                                                                                                                      />
                                                                                                                                                                                                            <button onClick={handleSubmit}>Submit Return</button>
                                                                                                                                                                                                                  {status && <p>{status}</p>}
                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                        );
                                                                                                                                                                                                                        };

                                                                                                                                                                                                                        export default ReturnFiling;
                                                                                                                                                                                                                        