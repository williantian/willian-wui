import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import ButtonExample from './lib/button.example';
import DialogExample from './lib/dialog/dialog.example';

ReactDOM.render(
    <Router>
        <div>
            <header>
                <div className='logo'></div>
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
                            <Link to='/dialog'>对话框</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path='/icon' component = {IconExample}></Route>
                    <Route path='/button' component = {ButtonExample}></Route>
                    <Route path='/dialog' component = {DialogExample}></Route>
                </main>
            </div>
        </div>
    </Router>,
    document.getElementById('root')
)