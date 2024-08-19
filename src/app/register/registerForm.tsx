"use client";

import ButtonComponent from "../components/button/Index";
import InputComponent from "../components/intput/Index";
import { labels } from "../constants/labels";

export const RegisterForm = () => {
  return (
    <section className="flex flex-col items-center bg-white w-1/2 justify-center">
      <h2 className="text-4xl text-center text-primary font-thin">
        Salvemos la comida
      </h2>
      <p className="text-sm mt-4 text-secondary">
        {labels.legends.registerLegend}
      </p>

      <form action="" className="w-full flex flex-col px-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <InputComponent
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="name"
              placeholder={labels.placeholders.companies.name}
              isRequired
            />
            <InputComponent
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="address"
              placeholder={labels.placeholders.companies.address}
            />
            <InputComponent
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="phone"
              placeholder={labels.placeholders.companies.phone}
            />
          </div>
          <div>
            <InputComponent
              className="p-2 mt-8 rounded-xl w-full"
              type="email"
              name="email"
              placeholder={labels.placeholders.companies.email}
            />
            <InputComponent
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="website"
              placeholder={labels.placeholders.companies.website}
            />
            <InputComponent
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="schedule"
              placeholder={labels.placeholders.companies.schedule}
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
