import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route,  NavLink} from 'react-router-dom';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/layout.example';
import './lib/index.scss';
import {Layout, Aside, Content, Header, Footer} from "./lib/layout/layout";
import './example.scss';
import IconDemo from "./lib/icon/icon.demo";
import FormExample from "./lib/form/form.example";

const logo = require('./logo.png');
console.log(typeof logo);
ReactDOM.render(
  <Router>
      <Layout className="site-page">
          <Header className="site-header">
              <div className='logo'>
                  <img src={logo} style={{width:"48",height:"48"}} alt=''/>
                  <span>WUI</span>
              </div>
          </Header>
          <Layout>
              <Aside className="site-aside">
                  <h2>组件</h2>
                  <ul>
                      <li>
                          <NavLink to='/icon'>Icon</NavLink>
                      </li>
                      <li>
                          <NavLink to='/button'>Button</NavLink>
                      </li>
                      <li>
                          <NavLink to='/dialog'>dialog</NavLink>
                      </li>
                      <li>
                          <NavLink to='/layout'>layout</NavLink>
                      </li>
                      <li>
                          <NavLink to='/form'>form</NavLink>
                      </li>
                  </ul>
              </Aside>
              <Content className="site-content">
                  <Route path='/icon' component={IconDemo}/>
                  <Route path='/button' component={ButtonExample}/>
                  <Route path='/dialog' component={DialogExample}/>
                  <Route path='/layout' component={LayoutExample}/>
                  <Route path='/form' component={FormExample}/>
              </Content>
          </Layout>
          <Footer className="site-footer">&copy; WUI 2019</Footer>
      </Layout>
  </Router>,
  document.getElementById('root')
);