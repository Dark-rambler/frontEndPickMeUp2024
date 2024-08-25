"use client";

import ButtonComponent from "../components/button/Index";
import InputComponent from "../components/intput/Index";
import { labels } from "../constants/labels";
import useApiClient from "../utils/apiClient";
import { useForm } from "react-hook-form";
import ImageUpload from "../components/imageUpload/ImageUpload";
import { ICompanyRegister } from "../interfaces/companyRegister.interface";
import { notificationMessages } from "../constants/notificationMessages";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const RegisterForm = () => {
  const { post } = useApiClient();
  const { handleSubmit, control } = useForm<ICompanyRegister>();
  const router = useRouter();

  const onSubmit = async (data: ICompanyRegister) => {
    try {
      const response = await post("/company", data);
      toast.success(notificationMessages.toast.success);
      router.push("/stores");
    } catch (err) {
      toast.error(notificationMessages.toast.error);
    }
  };

  return (
    <section className="flex flex-col items-center bg-white w-1/2 justify-center">
      <h2 className="text-4xl text-center text-primary font-thin">
        Salvemos la comida
      </h2>
      <p className="text-sm mt-4 text-secondary">
        {labels.legends.registerLegend}
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col px-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <InputComponent
              control={control}
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="name"
              label={labels.placeholders.companies.name}
              isRequired
              rules={{
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
                pattern: {
                  value: /^[a-zA-ZÁáÉéÍíÓóÚúÜüÑñ\s]+$/,
                  message: "Solo se permiten letras",
                },
              }}
            />
            <InputComponent
              control={control}
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="address"
              label={labels.placeholders.companies.address}
              rules={{
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
                pattern: {
                  value: /^[a-zA-ZÁáÉéÍíÓóÚúÜüÑñ\s.,]+$/,
                  message: "Solo se permiten letras",
                },
              }}
            />
            <InputComponent
              control={control}
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="phone"
              label={labels.placeholders.companies.phone}
              rules={{
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Solo se permiten números",
                },
              }}
            />
          </div>
          <div>
            <InputComponent
              control={control}
              className="p-2 mt-8 rounded-xl w-full"
              type="email"
              name="email"
              label={labels.placeholders.companies.email}
              rules={{
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                  message: "Correo no válido",
                },
              }}
            />
            <InputComponent
              control={control}
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="website"
              label={labels.placeholders.companies.website}
              rules={{
                required: {
                  value: true,
                  message: "Este campo es obligatorio",
                },
                pattern: {
                  value:
                    /^((http|https):\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}(\/)?$/i,
                  message: "URL no válida",
                },
              }}
            />
            <InputComponent
              control={control}
              className="p-2 mt-8 rounded-xl w-full"
              type="text"
              name="description"
              label={labels.placeholders.companies.description}
            />
          </div>
        </div>
        <div className="py-4 px-2">
          <ImageUpload control={control} name="imageUrl"/>
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
