import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const isUserLogin = useSelector(state => state.auth.isLogged);

    if (!isUserLogin) {
        return <Navigate to="/login"/>;
    }
    return children
};

export default PrivateRouter;