import React, {Component} from "react";
import {ThemeContext} from './App';

export default class ClassComponentWithContext extends Component {
  classThemeStyles(classThemeDark) {
    return {
      backgroundColor: classThemeDark ? '#000' : '#31FABC',
      color: classThemeDark ? '#31FABC' : '#000',
      fontWeight: 'bold',
      padding: '4rem',
      border: classThemeDark ? '12px solid white' : '12px solid black',
      borderStyle: classThemeDark ? 'dotted' : 'double',
      outlineStyle: 'double',
      margin: '2rem'
    };
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {darkTheme => {
          return <div style={this.classThemeStyles(darkTheme)}>Class Component Theme</div>
        }}
      </ThemeContext.Consumer>
    )
  }
}
