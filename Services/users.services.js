import axios from 'axios';
import AbortController from "abort-controller"
import apiclient from '../Interceptors/apiClient'
const controller = new AbortController();
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export const deleteTodo = async (id, ex) => {
    return(
     
        apiclient.delete(
                `/users/${id}`,
            ).then((res)=>{
                console.log(res);
                alert(JSON.stringify(res.status, null, 2));
            })
       
    );
};

export const updater = async (id, first, second) => {
    return(
        apiclient.put(
                `/users/${id}`, {
                name: first,
                job: second
            }
            ).then((res)=>{
                console.log(res);
            })
            // console.log(response.name);
        
    );
};

export const fetchData = async (page, per_page) => {
    // console.log('working',process.env.REACT_APP_NEXT_PUBLIC_ANALYTICS_ID);
    return(
        apiclient.get(`/users?page=${page}&per_page=${per_page}`
        ,{
            signal: controller.signal,
            validateStatus: function (status) {
              return status < 500; 
            }
          })
    );
}

export const AddTodo = async (first, second) => {
    return(
        
             apiclient.post(
                `/users`, {
                name: first,
                job: second
            }, {
                cancelToken: source.token
            }
            ).then((res)=>{
                console.log(res);
            })
    );
};