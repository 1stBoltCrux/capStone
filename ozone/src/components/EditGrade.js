import React from 'react';
import ReactDom from 'react-dom';
import styles from './editgrade.css';
import Menu from './Menu.js'

class EditGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state={isMenuHidden: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      isMenuHidden: !prevState.isMenuHidden
    }));
  }
  render()  {
    console.log('edit grades props: ' + this.props.myList);
    let menuVisibility = null;
    if (this.state.isMenuHidden === false) {
      menuVisibility = <Menu
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


export default EditGrade;
