import React from 'react';
import ReactDom from 'react-dom';
import './editgrade.css';
import okButton from './../imgs/okbutton.svg';
import styles from './menu.css';
import { connect } from 'react-redux'
import { handleSubmitRadio } from './../actions'
import Checkbox from './Checkbox'


class Menu extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      update: false,
      grade: null,
      additionalGrade: null
    }
    this.handleChangeGrade = this.handleChangeGrade.bind(this)
    this.handleChangeadditionalGrade = this.handleChangeadditionalGrade.bind(this)
  }

  handleChangeGrade(value){

    this.setState({
      grade: value
    })
  }

  handleChangeadditionalGrade(value){

    this.setState({
      additionalGrade: value
    })
  }



  render (){
    console.log(this.state.additionalGrade);
    return(

      <div className={styles.gradeMenuWrapper}>
        <div className={styles.gradeMenu}>
          <div className={styles.leftColumn}>
            <div className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.6'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.7'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.8'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.9'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.10'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.11'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.12'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.13'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='grade'
                onHandleChange={this.handleChangeGrade}
                additionalGrade={this.state.additionalGrade}
                value='5.14'
              />
            </div>

          </div>
          {/* right column buttons */}

          <div className={styles.rightColumn}>
            <div className={styles.valueBox}>
              <Checkbox
                name='additionalGrade'
                onHandleChange={this.handleChangeadditionalGrade}
                additionalGrade={this.state.additionalGrade}
                value='a'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='additionalGrade'
                onHandleChange={this.handleChangeadditionalGrade}
                additionalGrade={this.state.additionalGrade}
                value='b'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='additionalGrade'
                onHandleChange={this.handleChangeadditionalGrade}
                additionalGrade={this.state.additionalGrade}
                value='c'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='additionalGrade'
                onHandleChange={this.handleChangeadditionalGrade}
                additionalGrade={this.state.additionalGrade}
                value='d'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='additionalGrade'
                onHandleChange={this.handleChangeadditionalGrade}
                additionalGrade={this.state.additionalGrade}
                value='+'
              />
            </div>
            <div  className={styles.valueBox}>
              <Checkbox
                name='additionalGrade'
                onHandleChange={this.handleChangeadditionalGrade}
                additionalGrade={this.state.additionalGrade}
                value='-'
              />
            </div>
          </div>
        </div>
        <button onClick={(event)=>{ this.props.dispatch(handleSubmitRadio(event, this.state.grade, this.state.additionalGrade, this.props.firebaseId))}} type='submit' className={styles.okButton}> <img src={okButton}/></button>
      </div>

    );
  }
}

export default connect()(Menu);
