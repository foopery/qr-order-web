import { useNavigate } from "react-router-dom";

export const navigatorHandler = {
  useNavigator: () => {
    const navigate = useNavigate();

    return (url: string) => {
      navigate(url);
    };
  },
};
