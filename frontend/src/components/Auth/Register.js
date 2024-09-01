import React, { useState } from 'react';
import { register } from '../../services/auth';

const Register = () => {
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      const [name, setName] = useState('');

        const handleRegister = async (e) => {
            e.preventDefault();
                try {
                      await register({ email, password, name });
                            // Redirect to login or dashboard
                                } catch (error) {
                                      console.error(error);
                                          }
                                            };

                                              return (
                                                  <form onSubmit={handleRegister}>
                                                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                                                              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                                                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                                                          <button type="submit">Register</button>
                                                                              </form>
                                                                                );
                                                                                };

                                                                                export default Register;
                                                                                