import { useNavigate } from "react-router-dom";
import { useClientes } from "../components/UserContext";


const UserForm = () => {
    const { user, setUser } = useClientes();

    const navigate = useNavigate();

    const onHandleSubmit = (e) => {
        e.preventDefault();
        navigate("/budget");
    };

    return (
        <div className="w-full flex flex-col justify-center h-screen text-negro py-12 sm:py-16">
            <div className="w-11/12 m-auto flex flex-col sm:flex-row gap-16 font-comfortaa h-auto justify-center">
                {/* Description */}
                <div className="flex w-full sm:w-1/2 justify-center flex-col">
                    <h3 className="mb-6 text-2xl sm:text-4xl border-b-8 pb-4 border-violeta w-fit sm:text-end">
                        Simulá tu propuesta
                    </h3>
                    <p className="text-sm sm:text-xl leading-8 sm:leading-10">
                        Te ofrecemos una simulación aproximada del proyecto que desees
                        iniciar. Completa los datos y en breve nos comunicaremos con vos.
                    </p>
                </div>
                {/* Formulario */}
                <form
                    action=""
                    className="w-full sm:w-1/2 justify-center items-center gap-10 flex flex-col flex-wrap"
                >
                    <div className="w-full flex flex-col ">
                        <label htmlFor="name" className="text-sm">
                            Nombre: *
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            className="text-sm text-verdeOscuro border-b border-verdeOscuro"
                        />
                    </div>
                    <div className="w-full flex flex-col ">
                        <label htmlFor="city" className="text-sm">
                            Ciudad: *
                        </label>
                        <input
                            type="text"
                            id="city"
                            onChange={(e) => setUser({ ...user, city: e.target.value })}
                            className="text-sm text-verdeOscuro border-b border-verdeOscuro"
                        />
                    </div>
                    <div className="w-full flex flex-col ">
                        <label htmlFor="email" className="text-sm">
                            Email: *
                        </label>
                        <input
                            type="text"
                            id="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            className="text-sm text-verdeOscuro border-b border-verdeOscuro"
                        />
                    </div>
                    <div className="w-full flex flex-col ">
                        <label htmlFor="phone" className="text-sm">
                            Telefono: *
                        </label>
                        <input
                            type="number"
                            id="phone"
                            value={user.phone}
                            onChange={(e) => setUser({ ...user, phone: e.target.value })}
                            className="text-sm text-verdeOscuro border-b border-verdeOscuro"
                        />
                    </div>
                    <button
                        className="w-full m-auto bg-verdeOscuro p-2"
                        type="submit"
                        onClick={onHandleSubmit}
                    >
                        Siguiente
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
