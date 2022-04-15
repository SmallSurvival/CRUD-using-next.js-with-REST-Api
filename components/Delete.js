import { useEffect } from 'react';
import axios from 'axios';

const App = () => {
    useEffect(() => {
        const deleteTodo = async (id,e) => {
            try {
                const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);  
                console.log(response.status);
            } catch (e) {
                console.log('Not Deleteds!', e);
            }
        };
        deleteTodo();
    }, []);
    return <div>DELETE REQUEST</div>;
    
};
export default App;