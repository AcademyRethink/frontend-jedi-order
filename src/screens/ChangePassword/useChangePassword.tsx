import { useNavigate  } from 'react-router-dom';
import { changeAndVerifyPassword } from '../../model/api/changePassword';
import {useState, FormEvent, useEffect} from 'react'

const useChangePassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] =  useState({actualPassword: '', password: ''});
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      
      const formData = new FormData(event.currentTarget);
      const actualPassword = formData.get('actualPassword') as string;
      const password = formData.get('newPassword') as string;
      const newPasswordConfirm = formData.get('newPasswordConfirm') as string;
      
      if (password == newPasswordConfirm) {
          setNewPassword({ actualPassword, password });
      }else{
          setErrorMessage('As senhas não coincidem');
      }
  };
 
  const closeModal = () => {
      setIsModalOpen(false);
      navigate('/minha-conta');
  };

  const cancelSolicitation = () => {
    navigate('/minha-conta');
};
  
  useEffect(() => {
      if (newPassword.actualPassword !== '' &&
          newPassword.password !== '') {
          changeAndVerifyPassword(newPassword)
          .then(() => {
              setIsModalOpen(true);
              setErrorMessage("");
          })
          .catch((error) => {
              setErrorMessage(error.response.data.message);
          });
      }
    }, [newPassword]);

  return{
    handleSubmit,
    closeModal,
    errorMessage,
    isModalOpen,
    cancelSolicitation
  }
}

export default useChangePassword