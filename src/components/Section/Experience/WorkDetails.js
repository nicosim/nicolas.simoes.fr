import React, { Component } from 'react'

import {List, ListItem} from 'material-ui';
import {FlatButton, RaisedButton, Dialog} from 'material-ui';

const SUMMARY_PREVIEW_LENGTH=150;

const style = {
  listItem: {
    fontSize:14,
    padding:8,
  },
  dialogContainer: {
      width:'80%',
      maxWidth: 'none',
  },
  dialogContent:{
    color:'black',
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
    <div style={style.dialogContent}>
        <h3 className="vertical-timeline-element-title">{work.position}</h3>
        <h4 className="vertical-timeline-element-subtitle">{work.company}</h4>
        <a href={work.website}>{work.website}</a>
        
        {(isDialog || work.summary.length<SUMMARY_PREVIEW_LENGTH)?
            <div><br/>
              {work.summary.split('\n').map((item, key) => {
                  return <span key={key}>{item}<br/></span>
              })}
            </div>
        :
            <div>{work.summary.substring(0,SUMMARY_PREVIEW_LENGTH)+'...'}
            <br/>
            <RaisedButton label="En savoir plus" onClick={this.handleOpen}/>
            </div>
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
            contentStyle={style.dialogContainer}
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