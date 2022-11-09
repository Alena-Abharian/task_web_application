import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

const PublicRouter = ({children}) => {
    const isUserLogin = useSelector(state => state.auth.isLogged);
    return isUserLogin ? <Navigate to="/"/> : children;
};

export default PublicRouter;