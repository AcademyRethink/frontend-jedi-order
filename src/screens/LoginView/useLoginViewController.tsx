import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import useLoginViewModel from "../../viewmodel/useLoginViewModel";

const useLoginViewController = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const { authenticateUser } = useLoginViewModel();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("senha") as string;
    authenticateUser({ email, password })
      .then(() => {
        navigate("/painel-central");
      })
      .catch((error) => setError(error.message));
  };

  return {
    handleSubmit,
    error,
  };
};

export default useLoginViewController;
