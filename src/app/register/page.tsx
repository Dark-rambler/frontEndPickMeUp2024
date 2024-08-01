import React from "react";
import InputComponent from "../components/intput/Index";
import ButtonComponent from "../components/button/Index";

export default function Register() {
  return (
    <div className="flex justify-between h-full ">
      <section className="flex flex-col items-center bg-white w-1/2 justify-center">
        <h2 className="font-bold text-4xl text-center">Salvemos la comida</h2>
        <p className="text-sm mt-4">Registra tu empresa y ayuda al medio ambiente mientras subes tus ganancias!!</p>

        <form action="" className="w-full flex flex-col items-center">
          <div className="grid grid-cols-2 gap-4 p-8">
            <div>
              <InputComponent
                className="p-2 mt-8 rounded-xl w-full"
                type="text"
                name="name"
                placeholder="Nombre de la empresa"
              />
              <InputComponent
                className="p-2 mt-8 rounded-xl w-full"
                type="text"
                name="address"
                placeholder="Dirección de la empresa"
              />
              <InputComponent
                className="p-2 mt-8 rounded-xl w-full"
                type="text"
                name="phone"
                placeholder="Teléfono de la empresa"
              />
            </div>
            <div>
              <InputComponent
                className="p-2 mt-8 rounded-xl w-full"
                type="email"
                name="email"
                placeholder="Email de la empresa"
              />
              <InputComponent
                className="p-2 mt-8 rounded-xl w-full"
                type="text"
                name="website"
                placeholder="Dirección web"
              />
              <InputComponent
                className="p-2 mt-8 rounded-xl w-full"
                type="text"
                name="schedule"
                placeholder="Horario de atención"
              />
            </div>
          </div>
          <ButtonComponent
            className="bg-green-200 text-white rounded-xl py-2 mt-8 hover:scale-110 duration-300 w-1/2 mx-auto"
            type="submit"
          >
            Registrar
          </ButtonComponent>
        </form>

        <div className="mt-4 text-sm flex justify-between items-center container-mr">
          <p className="mr-3 md:mr-0 ">Ya tienes una cuenta...</p>
          <ButtonComponent className="hover:border register text-white bg-white hover:border-gray-400 rounded-xl py-2 px-5 hover:scale-110 hover:bg-secondary font-semibold duration-300">
            Inicia sesión
          </ButtonComponent>
        </div>
      </section>
      <div
        className="w-1/2"
        style={{
          backgroundImage:
            "url('https://www.onsightapp.com/blog/wp-content/uploads/2022/02/retail-store-shelves1-e1644268565641.jpg')",
        }}
      ></div>
    </div>
  );
}
