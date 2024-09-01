import { useSelector } from "react-redux";
import MyModal from "./Index";
import { useEffect } from "react";

interface CartModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
const CartModal = ({ isOpen, onOpenChange }: CartModalProps) => {
  const products = useSelector((state) => state);
  console.log(products);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
      
  }

  return (
    <MyModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title="Carrito"
    >
      <div>

        <div className="flex justify-between items-center">
          <h2 className="text-tittles-color font-bold text-xl">Producto</h2>
          <h2 className="text-tittles-color font-bold text-xl">Precio</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-tittles-color font-bold text-xl">Producto</h2>
          <h2 className="text-tittles-color font-bold text-xl">Precio</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-tittles-color font-bold text-xl">Producto</h2>
          <h2 className="text-tittles-color font-bold text-xl">Precio</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-tittles-color font-bold text-xl">Producto</h2>
          <h2 className="text-tittles-color font-bold text-xl">Precio</h2>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-tittles-color font-bold text-xl">Producto</h2>
          <h2 className="text-tittles-color font-bold text-xl">Precio</h2>
        </div>
        

      </div>
    </MyModal>
  );
};

export default CartModal;
