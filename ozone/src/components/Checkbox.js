import React, {Component} from 'react';
import styles from './checkbox.css'

class Checkbox extends Component {
  constructor(props){
    super(props)
    this.checkRef = React.createRef();
    this.state = {
      checked: false
    }
  }


  handleChecked = () => {
      this.setState({
        checked: this.checkRef.current.checked
      })
  }

  render(){
    let isChecked;

    if(this.checkRef.current){
      if(this.checkRef.current.checked){
        isChecked = {
          border: '1px solid white'
        }
      }
    }
    return (
      <div style={isChecked}  className={styles.valueBox}>
        <input
          ref={this.checkRef}
          id='myCheck'
          name={this.props.name}
          type='radio'
          value={this.props.value}
          // checked={this.props.value === this.props.value}
          onChange={()=> {this.props.onHandleChange(this.props.value); this.handleChecked();}}
        />
      </div>
    )
  }
}

export default Checkbox
