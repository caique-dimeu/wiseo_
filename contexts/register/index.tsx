// context/RegisterContext.tsx
import { createContext, useContext, useState } from "react";

type RegisterData = {
  email: string;
  password: string;
  name: string;
  birth: string;
  phone: string;
  profession: string;
  income: string;
  username: string;
};

const RegisterContext = createContext<{
  data: Partial<RegisterData>;
  update: (newData: Partial<RegisterData>) => void;
}>({
  data: {},
  update: () => {},
});

export const RegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [data, setData] = useState<Partial<RegisterData>>({});
  const update = (newData: Partial<RegisterData>) =>
    setData((prev) => ({ ...prev, ...newData }));

  return (
    <RegisterContext.Provider value={{ data, update }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
