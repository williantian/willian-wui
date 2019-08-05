import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import './lib/index.scss';

ReactDOM.render(
  <Router>
      <div>
          <header>
              <div className='logo'/>
          </header>
          <div>
              <aside>
                  <h2>组件</h2>
                  <ul>
                      <li>
                          <Link to='/icon'>Icon</Link>
                      </li>
                      <li>
                          <Link to='/button'>Button</Link>
                      </li>
                      <li>
                          <Link to='/dialog'>dialog</Link>
                      </li>
                      <li>
                          <Link to='/layout'>layout</Link>
                      </li>
                  </ul>
              </aside>
              <main>
                  <Route path='/icon' component={IconExample}/>
                  <Route path='/button' component={ButtonExample}/>
                  <Route path='/dialog' component={DialogExample}/>
                  <Route path='/layout' component={LayoutExample}/>
              </main>
          </div>
      </div>
  </Router>,
  document.getElementById('root')
);