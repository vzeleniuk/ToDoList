import React from 'react';
import { Aside } from './Aside';
import { Header } from './Header';
import { Main } from './Main';
import { ToDoList} from './ToDoList';

export class Root extends React.Component {
  render() {
    return (
      <div className="cover-container d-flex w-100 mx-auto flex-column page-wrapper">
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-4">
              <Aside/>
            </div>
            <div className="col-md-8 col-8">
              <Main>
                <ToDoList/>
              </Main>
            </div>
          </div>
        </div>
      </div>
    );
  }
}