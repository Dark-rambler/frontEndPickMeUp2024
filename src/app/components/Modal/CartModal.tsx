import MyModal from "./Index";

interface CartModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}
const CartModal = ({ isOpen, onOpenChange }: CartModalProps) => {
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
