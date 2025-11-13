import { createContext, useContext, useState } from "react";
// import { newBudgetRequest } from "../api/budget";

const ClientesContext = createContext();

export const useClientes = () => useContext(ClientesContext);

const ClientesProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "",
        city: "",
        email: "",
        phone: "",
    });

    const [dataList, setDataList] = useState([]);
    const [budget, setBudget] = useState({
        name: "",
    });
    const [services, setServices] = useState([
        { id: Math.random(), item: "", cantidad: "" },
    ]);
    const [onLoad, setOnLoad] = useState(false);

    // const newBudget = async () => {
    //     try {
    //         const res = await newBudgetRequest({ services, user });
    //         return res;
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // };

    return (
        <ClientesContext.Provider
            value={{
                user,
                setUser,
                budget,
                setBudget,
                dataList,
                setDataList,
                services,
                setServices,
                // newBudget,
                onLoad,
                setOnLoad,
            }}
        >
            {children}
        </ClientesContext.Provider>
    );
};

export default ClientesProvider;
