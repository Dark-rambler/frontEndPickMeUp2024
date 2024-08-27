import { labels } from "@/app/constants/labels";
import { useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { useController } from "react-hook-form";

type TImageUploadProps = {
  control: any;
  name: string;
  label?: string;
};

const ImageUpload = ({ control, name, label }: TImageUploadProps) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      onChange(file.name);
    },
    [onChange]
  );

  const accept: Accept = {
    "image/*": [],
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple: false,
  });

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer w-full ${
        isDragActive ? "border-secondary" : "border-gray-300 hover:border-gray-500"
      }`}
    >
      <input {...getInputProps()} name={name} onBlur={onBlur} />
      {isDragActive ? (
        <p className="text-secondary">Suelta la imagen aquí...</p>
      ) : (
        <p className="text-gray-500">
          {value
            ? `Imagen seleccionada: ${value}`
            : label || labels.legends.dropZone}
        </p>
      )}
      {error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
};

export default ImageUpload;
