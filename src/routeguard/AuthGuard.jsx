import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { selectToken, setToken } from '../redux/studentsredux/studentslice';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinnerFullScreen from '../components/LoadingSpinnerFullScreen';

function AuthGuard() {
    const token = useSelector(selectToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!token) {
            const localStorageToken = localStorage.getItem('jwtToken');
            if (localStorageToken) {
                dispatch(setToken(localStorageToken))
            } else {
                navigate('/students/login')
            }
        }
        setLoading(false);
    }, [token, dispatch, navigate]);

    if(loading) {
        return <div><LoadingSpinnerFullScreen/></div>
    }

    return (
        <>
            <Outlet />
        </>
    )
}

export default AuthGuard