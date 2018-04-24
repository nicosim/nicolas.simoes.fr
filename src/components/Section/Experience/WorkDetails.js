import React, { Component } from 'react'

import {List, ListItem} from 'material-ui';
import {FlatButton, RaisedButton, Dialog} from 'material-ui';

const SUMMARY_PREVIEW_LENGTH=150;

const style = {
  listItem: {
    fontSize:14,
    padding:8,
  },
  dialogContent: {
      width:'80%',
      maxWidth: 'none',
  }
}

class WorkDetails extends Component {
  constructor(props) {
      super(props);
      this.state = {
          open: false,
      };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
  this.setState({open: false});
  };


  actions = [
    <FlatButton
      label="Retour"
      primary={true}
      onClick={this.handleClose}
    />,
  ];

  displayWorkDetails = (work, isDialog) =>
  (
    <div>
        <h3 className="vertical-timeline-element-title">{work.position}</h3>
        <h4 className="vertical-timeline-element-subtitle">{work.company}</h4>
        <a href={work.website}>{work.website}</a>
        
        {(isDialog || work.summary.length<SUMMARY_PREVIEW_LENGTH)?
            <p><br/>
            {work.summary.split('\n').map((item, key) => {
                return <span key={key}>{item}<br/></span>
            })}</p>
        :
            <p>{work.summary.substring(0,SUMMARY_PREVIEW_LENGTH)+'...'}
            <br/>
            <RaisedButton label="En savoir plus" onClick={this.handleOpen}/>
            </p>
        }
        <List>
        {work.highlights.map(h=>
            <ListItem key={h} primaryText={h} innerDivStyle={style.listItem}/> 
        )}
        </List>
    </div>
  )

  render() {
    const {work} = this.props;
    return (
      <div>
        {this.displayWorkDetails(work, false)}
        {work.summary.length>SUMMARY_PREVIEW_LENGTH?
        <Dialog
            actions={this.actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
            contentStyle={style.dialogContent}
        >
            {this.displayWorkDetails(work, true)}
        </Dialog>
        :<div></div>
        }
      </div>
    )
  }
}

export {WorkDetails};