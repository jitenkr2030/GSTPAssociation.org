import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import ReturnFiling from './components/ReturnFiling';
import AuditCompliance from './components/AuditCompliance';
import Analytics from './components/Analytics';

const App = () => {
  return (
      <Router>
            <Header />
                  <main>
                          <Switch>
                                    <Route path="/return-filing" component={ReturnFiling} />
                                              <Route path="/audit-compliance" component={AuditCompliance} />
                                                        <Route path="/analytics" component={Analytics} />
                                                                  <Route path="/" exact>
                                                                              <h2>Welcome to GSTPAssociation.org</h2>
                                                                                          <p>Your platform for comprehensive GST solutions.</p>
                                                                                                    </Route>
                                                                                                            </Switch>
                                                                                                                  </main>
                                                                                                                        <Footer />
                                                                                                                            </Router>
                                                                                                                              );
                                                                                                                              };

                                                                                                                              export default App;
                                                                                                                              