import React from 'react';
import ReactDom from 'react-dom';
import styles from './editgrade.css';
import Menu from './Menu.js'
import {connect} from 'react-redux';

class EditGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isMenuHidden: true,
      shieldGrade: this.props.rating
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(){
    this.setState(prevState => ({
      isMenuHidden: !prevState.isMenuHidden
    }));
  }

  handleShieldGrade = (chosenGrade) => {
    this.setState({
      shieldGrade: chosenGrade
    })
  }


  render()  {

    console.log('edit grades props: ' + this.props.rating);
    let menuVisibility = null;
    if (this.state.isMenuHidden === false) {
      menuVisibility = <Menu
        onHandleShieldGrade={this.handleShieldGrade}
        onHandleClick={this.handleClick}
        firebaseId={this.props.firebaseId}/>;
    } else {
      menuVisibility = null;
    }
    return(
      <div className={styles.editGradeWrapper}>
        <div className={styles.closeButton} onClick={()=>this.props.onGradeModal()}></div>
        <div className={styles.shield}><p><span className={styles.yourGrade}>{this.props.rating}</span></p></div>
        <div className={styles.gradeDropdown} onClick={this.handleClick}></div>
        {menuVisibility}
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
  }
}


export default connect(mapStateToProps)(EditGrade)
