import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../../actions';
import "./From.scss";

const From = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandom(state));
  };
  return <div class="child">
    <form onSubmit={onSubmit}>
      <h3>Characters Shuffler</h3>
      <label htmlFor="list">Ingrese una secuencia de carácteres</label>
      <br />
      <textarea id="list" style={{ width: "300px", height: "120px" }} 
        onChange={(e) => setState(e.target.value)}
      ></textarea>
      <br />
      <button type="submit" disabled={props.loading}>
      Enviar <i className="fa fa-upload"></i>
      </button>
    </form>
  </div>
}


const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPros)(From)