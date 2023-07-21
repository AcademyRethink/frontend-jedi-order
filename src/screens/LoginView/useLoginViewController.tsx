import {useState, FormEvent, useEffect} from 'react'
import { verifyUser } from "../../model/api/login";
import { useNavigate  } from 'react-router-dom';

const useLoginViewController = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/center-panel');
    }
  }, [navigate]);
  
  useEffect(() => {
    if (user.email !== '' && user.password !== '') {
      verifyUser(user)
        .then((resp) => {
          navigate('/center-panel');
        })
        .catch((error) => {
          setErrorMessage(error.message)
        });
    }
  }, [user, navigate]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('senha') as string;

    setUser({ email, password });
  };

  return {
    handleSubmit,
    errorMessage
  };
};

export default useLoginViewController;
