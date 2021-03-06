import { request,setUsername,removeUsername } from 'util';
import { message } from 'antd';
import { ADD_CATEGORY,GET_CATEGORIES,GET_INPUTVALUE,CHANGE_ORDER } from 'api';
import * as types from './actionTypes.js';

//生成action
export const getAddRequstAction = ()=>{
	return{
		type:types.ADD_REQUEST
	}
}
export const getAddDoneAction = ()=>{
	return{
		type:types.ADD_DONE
	}
}
export const setLevelOneCategories = (payload)=>{
	return{
		type:types.SET_LEVEL_ONE_CATEGORIES,
		payload
	}
}
export const getPageRequestAction = ()=>{
	return {
		type:types.PAGE_REQUEST
	}
}
export const getPageDoneAction = ()=>{
	return {
		type:types.PAGE_DONE
	}
}
export const getSetPageAction = (payload)=>{
	return {
		type:types.SET_PAGE,
		payload
	}
}
export const getShowUpdateModalAction = (updateId,updateName)=>{
	return{
		type:types.SHOW_UPDATE_MODAL,
		payload:{
			updateId,
			updateName
		}
	}
}
export const getHideUpdateModalAction = ()=>{
	return{
		type:types.HIDE_UPDATE_MODAL,
	}
}
export const getChangeUpdateModalAction = ()=>{
	return{
		type:types.CHANGE_UPDATE_MODAL,
	}
}
export const getChangeNameAction = (payload)=>({
	type:types.CHANGE_NAME,
	payload
})
//方法
export const getAddAction = (values)=>{
	return (dispatch)=>{
        request({
			method: 'post',
			url: ADD_CATEGORY,
			data: values
		})
		.then((result)=>{
			if(result.code == 0){
				if(result.data){
					dispatch(setLevelOneCategories(result.data))			
				}else{
					message.success('添加分类成功');					
				}
				window.location.href = '/category';
			}else{
				message.error('已存在!')
			}

		})
		.catch((err)=>{
			message.error('网络错误,请稍后在试!')
			dispatch(getAddDoneAction())				
		})
	}
}

export  const getLevelOneCategoriesAction = ()=>{
	return (dispatch)=>{
        request({
			method: 'get',
			url: GET_CATEGORIES,
			data: {
				pid:0
			}
		})
		.then((result)=>{
			if(result.code == 0){
				dispatch(setLevelOneCategories(result.data))
			}else{
				message.error('网络错误,获取数据失败!')
			}
			dispatch(getAddDoneAction())			
		})
		.catch((err)=>{
			message.error('网络错误,连接服务器失败123!')
			dispatch(getAddDoneAction())				
		})
	}
}

export const getPageAction = (pid,page)=>{
	return (dispatch)=>{
		dispatch(getPageRequestAction());
		request({
			url: GET_CATEGORIES,
			data:{
				pid:pid,
				page:page
			}
		})
		.then((result) => {
			if (result.code == 0) {
				dispatch(getSetPageAction(result.data));
				dispatch(getPageDoneAction());
			}else{
				message.error('获取数据失败')
			}
			dispatch(getPageDoneAction());
		})
		.catch(function (err) {
			message.error('服务器错误')
			const action = getPageDoneAction();
			dispatch(action);
		});
	}
}


export const getChangeInputValueAction = (pid)=>{
	// console.log('actionCreates的',updateName)
	return (dispatch,getState)=>{
		const state=getState().get('category')
		request({
			method:'put',
			url: GET_INPUTVALUE,
			data:{
				id:state.get('updateId'),
				name:state.get('updateName'),
				pid:pid,
				page:state.get('current')
			}
		})
		.then((result) => {
			if (result.code == 0) {
				dispatch(getSetPageAction(result.data));
				dispatch(getChangeUpdateModalAction())
			}else{
				message.error(result.message)
			}
		})
		.catch(function (err) {
			message.error('服务器错误')
		});
	}
}

export const getChangeOrderAction = (pid,id,newOrder)=>{
	return (dispatch,getState)=>{
		const state=getState().get('category')
		request({
			method:'put',
			url: CHANGE_ORDER,
			data:{
				id:id,
				order:newOrder,
				pid:pid,
				page:state.get('current')
			}
		})
		.then((result) => {
			if (result.code == 0) {
				dispatch(getSetPageAction(result.data));
				console.log('执行了setpage')
			}else{
				message.error(result.message)
			}
		})
		.catch(function (err) {
			message.error('服务器错误')
		});
	}
}