import React from 'react';
import { filterContacts }  from '../../redux/form/form-actions';
import { connect } from 'react-redux';



const Filter = ({value, onChange}) => {

return (
  <div>
    <span>Find contact by name</span>
    <form>
      <label>
        <input
          type="text"
          value={value}
          onChange ={onChange}
          >  
        </input>
      </label>
    </form>
  </div>)
}





const mapStateToProps = state => ({ ...state,
  value: state.filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(filterContacts(event.target.value)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter)