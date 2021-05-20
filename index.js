import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/styles/prism';
import CrossArea from './CrossArea';


// import Simple from './Simple';
// import Customized from './Customized';
//import AddAndDelete from './AddAndDelete';
// import CrossAreaRestriction from './CrossArea-restriction';
// import List from './List';
// import NestedTags from './NestedTags';
// import ControlledTags from './ControlledTags';

import styles from './style.less';


class Main extends Component { 
  render() {
    return (
      <div>
        <div className="content">
          <h3 className="section-title" id="CrossAreaDrag">
            Social Career AI x JD generator
          </h3>
          <h4> 
          
          <p>Simple Guide :) <br/>
          1. Input keywords e.g., "学历" within the keyword boxes, or you can also click the role buttoms below to generate some recommended descriptions. Feel free to type or click one more time if you want a different result!<br/>
          2. Double-click the text bubble to edit and press return on keyboard to finish editting.<br/>
          3. Use mouse to draw drag the bubble to the edit box for intergration, you could click the "-" in each bubble to delete it.<br/>
          4. Click output bottom to generate the final jd version.<br/>
          </p>


          </h4>
          <h5></h5>
          <CrossArea />

        </div>
      </div>
    );
  }
}

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
  <Main />,
  root
);
