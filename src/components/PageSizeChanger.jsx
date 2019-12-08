import React from 'react';
import { connect } from 'react-redux';
import  { setPageSize } from '../actions';

function PageSizeChanger(props){
	const availibleSizes = [6, 10, 20];
	const radioInputs =  availibleSizes.map((item)=>{
		let checked;
		if(props.pageSize == item){
			checked=true;
		}else{
			checked=false;
		}
		return(
			<p><input type="radio" name="pageSize" value={item} checked={checked}/> {item}</p>
		)
	})
	return(
		<div onClick={(event) => {
			if(event.target.getAttribute('name')=="pageSize"){
				props.setPageSize(event.target.value);
			}
		}}>
			<h4>Новостей на странице</h4>
			{radioInputs}
		</div> 
	)

}

const mapStateToProps = (state) => ({
  pageSize: state.pageSize,
});

function mapDispatchToProps(dispatch) {
  return {
    setPageSize: (pageSize) => {
	
      dispatch(setPageSize(pageSize));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSizeChanger);