import React from 'react';
import ReactDom from 'react-dom';
import './editgrade.css';
import okButton from './../imgs/okbutton.svg';
import styles from './menu.css';
import { connect } from 'react-redux'
import { handleSubmitRadio } from './../actions'


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

  handleChangeGrade(e){
    console.log(this.state);
    this.setState({
      grade: e.target.value
    })
  }

  handleChangeadditionalGrade(e){
    console.log(this.state);
    this.setState({
      additionalGrade: e.target.value
    })
  }

  render (){
    return(

      <div className={styles.gradeMenuWrapper}>
        <form>
        <div className={styles.gradeMenu}>
          <div className={styles.leftColumn}>
            <div className={styles.valueBox}>
              <input
                type='radio'
                value='5.6'
                checked={this.state.grade === '5.6'}
                onChange={this.handleChangeGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='5.6'
                checked={this.state.grade === '5.7'}
                onChange={this.handleChangeGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='5.7'
                checked={this.state.grade === '5.8'}
                onChange={this.handleChangeGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='5.8'
                checked={this.state.grade === '5.9'}
                onChange={this.handleChangeGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='5.9'
                checked={this.state.grade === '5.10'}
                onChange={this.handleChangeGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='5.10'
                checked={this.state.grade === '5.11'}
                onChange={this.handleChangeGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='5.11'
                checked={this.state.grade === '5.12'}
                onChange={this.handleChangeGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='5.12'
                checked={this.state.grade === '5.13'}
                onChange={this.handleChangeGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='5.13'
                checked={this.state.grade === '5.14'}
                onChange={this.handleChangeGrade}
              />
            </div>

          </div>
          {/* right column buttons */}

          <div className={styles.rightColumn}>
            <div className={styles.valueBox}>
              <input
                type='radio'
                value='a'
                checked={this.state.additionalGrade === 'a'}
                onChange={this.handleChangeadditionalGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='b'
                checked={this.state.additionalGrade === 'b'}
                onChange={this.handleChangeadditionalGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='c'
                checked={this.state.additionalGrade === 'c'}
                onChange={this.handleChangeadditionalGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='d'
                checked={this.state.additionalGrade === 'd'}
                onChange={this.handleChangeadditionalGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='+'
                checked={this.state.additionalGrade === '+'}
                onChange={this.handleChangeadditionalGrade}
              />
            </div>
            <div  className={styles.valueBox}>
              <input
                type='radio'
                value='-'
                checked={this.state.additionalGrade === '-'}
                onChange={this.handleChangeadditionalGrade}
              />
            </div>
          </div>

        </div>
        <button onClick={(event)=>{ this.props.dispatch(handleSubmitRadio(event, this.state.grade, this.state.additionalGrade, this.props.firebaseId)), this.props.onHandleClick()}} type='submit' className={styles.okButton}> <img src={okButton}/></button>
        </form>
        {this.state.update}
      </div>

    );
  }
}

export default connect()(Menu);
