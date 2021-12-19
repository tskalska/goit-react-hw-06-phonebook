import React from 'react';
// import { useDispatch } from 'react-redux';
import { filterContacts }  from '../../redux/form/form-actions';
import { connect } from 'react-redux';



const Filter = ({value, onChange}) => {
  // const dispatch = useDispatch();

  // const handleChange = (event) => {
  //   console.log(event);
  //   dispatch(filterContacts(event.target.value))
  // }

  // const findCondtact = ({findName}) => {
  //   console.log({findName})
  //   dispatch(filterContacts(findName))
  // }




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

const mapStateToProps = state => ({
  value: state.filter,
})

const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(filterContacts(event.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)