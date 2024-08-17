"use client";

import ButtonComponent from "../components/button/Index";
import InputComponent from "../components/intput/Index";

export const RegisterForm = () => {
  return (
    <section className="flex flex-col items-center bg-white w-1/2 justify-center">
    <h2 className="text-4xl text-center text-primary font-thin">
      Salvemos la comida
    </h2>
    <p className="text-sm mt-4 text-secondary">
      Registra tu empresa y ayuda al medio ambiente mientras subes tus
      ganancias!!
    </p>

    <form action="" className="w-full flex flex-col px-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <InputComponent
            className="p-2 mt-8 rounded-xl w-full"
            type="text"
            name="name"
            placeholder="Nombre de la empresa"
            isRequired
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
        className="bg-primary text-white rounded-xl py-2 mt-8 hover:scale-110 duration-300 w-1/2 mx-auto"
        type="submit"
      >
        Registrar
      </ButtonComponent>
    </form>

    <div className="mt-4 text-sm flex justify-between items-center container-mr">
      <p className="mr-3 md:mr-0 text-secondary">Ya tienes una cuenta...</p>
      <ButtonComponent
        className="bg-white text-secondary rounded-xl py-2 px-5 hover:text-primary font-semibold duration-300"
        showTooltip={false}
      >
        Inicia sesión
      </ButtonComponent>
    </div>
  </section>
  );
};
