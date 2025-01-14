import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginFormData } from "../components/forms/login";
import { api } from "../services/api";
import { jwtDecode } from "jwt-decode";

interface ILoginProvider {
  children: React.ReactNode;
}

interface ILoginContext {
  login: (formdate: ILoginFormData) => Promise<void>;
  company: ICompany | null;
  employee: IEmployee | null;
  logout: () => void
  load: boolean
  autoLogin: (token: string) => Promise<void>
}

interface ICompany {
  id: number;
  corporateReason: string;
  fantasyName: string;
  cnpj: string;
  phoneNumber: string;
  email: string;
  logo: string;
  img:string;
 
}

interface IEmployee {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  job: string;
}

export interface IPedidos {
  id: number;
  products: [IproductsSell];
  pizzaOption: [IpizzaOption];
  type: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  taxa:string | null;
  index:string | null;
  client: Iclients;
  company:ICompany
}
export interface IpizzaOption{
  id:string;
  size: string;
  price: string
  extras: [
   string
  ];
  halfAndHalf: boolean,
  halfOptions: IPizza,
  pizza:IPizza
}

export interface IPizza{
id: number,
name: string,
price_G: string,
price_M:string,
price_P:string,
description:string,
img: string|null,
company:ICompany,
borda:any
}

export interface Iclients {
  id: number;
  name: string;
  phoneNumber: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
  };
}

export interface IproductsSell{
  id:number,
  price:string,
  product:IProducts

}

export interface IProducts{
  id: number,
  name: string,
  quantity: string,
  initialPrice: string,
  price:string,
  category: string,
  supplier: string,
  unitOfMeasurement: string,
  img: string|null
}

export const LoginContext = createContext({} as ILoginContext);

export const LoginProvider = ({ children }: ILoginProvider) => {
  const [company, setCompany] = useState<ICompany | null>(null);
  const [employee, setEmployee] = useState<IEmployee | null>(null);
  const [load, setLoad]=useState(false)

  const navigate = useNavigate();

  const login = async (formdate: ILoginFormData) => {
    setLoad(true)
    try {
      const response = await api.post("/login", formdate);

      const token = response.data.token;

      localStorage.setItem("@TOKEN", token);

      const jwt: any = jwtDecode(token);

      localStorage.setItem("@USER", JSON.stringify(jwt));

      if (jwt.sub == "admin") {
        setCompany(jwt.userType);

        navigate("/admin");
      } else if (jwt.userType.job == "Motoboy") {
        setEmployee(jwt.userType);
        
        navigate("/employes/entregas");
      } else if (jwt.userType.job == "Garçon") {
        setEmployee(jwt.userType);

        navigate("employes/mesas");
      }
    } catch (error) {
      console.log(error);
    }
  
  };

  const autoLogin = async (token:string) => {
    try {
      const userLogado = JSON.parse(localStorage.getItem("@USER")!);
      if (userLogado.sub == "admin") {

        const response = await api.get(`/company/${userLogado.userType.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setCompany(response.data);
        // navigate("/admin");
      } else if (userLogado.userType.job == "Motoboy") {
        setEmployee(userLogado.userType);
        navigate("/employes/entregas");
      } else if (userLogado.userType.job == "Garçon") {
        setEmployee(userLogado.userType);
        navigate("employes/mesas");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      autoLogin(token);
    } else {
      navigate("/");
    }
  }, []);


  const logout = () => {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USER");
    setCompany(null);
    setEmployee(null)
    setLoad(false)
    navigate("/");
  };

  return (
    <LoginContext.Provider value={{ login,load, company, employee,logout, autoLogin }}>
      {children}
    </LoginContext.Provider>
  );
};
