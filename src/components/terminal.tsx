import React, { Component } from 'react';
import $ from 'jquery';
import 'jquery.terminal/js/jquery.terminal';
import 'jquery.terminal/css/jquery.terminal.min.css';



export default class Terminal extends React.Component {
  //NOTE: this is adapted from an old jquery library and I dont quite know the types
  terminal : any;
  node : any;
  props : any;
  interface :  any;

  componentDidMount() {
    // ignore command
    const {interpreter, command, ...options} : any = this.props;
    this.terminal = $(this.node).terminal(interpreter, options);
  }
  componentWillUnmount() {
    //this.terminal.destroy();
  }
  isCommandControlled() {
    return this.props.command != undefined;
  }
  render() {
    if (this.terminal && this.isCommandControlled()) {
      this.terminal.set_command(this.props.command, true);
    }
    return (
      <div ref={(node) => this.node = node}></div>
    );
  }
}
