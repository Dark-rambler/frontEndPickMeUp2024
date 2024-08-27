import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";

export interface ModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  children: React.ReactNode;
  textCloseButton?: string;
  textActionButton?: string;
  modalPlacement?: "auto" | "top" | "top-center" | "bottom" | "bottom-center";
}

const MyModal = ({
  isOpen,
  onOpenChange,
  title,
  children,
  textCloseButton = "Cerrar",
  textActionButton = "Aceptar",
  modalPlacement = "auto",
}: ModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      placement={modalPlacement}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                {textCloseButton}
              </Button>
              <Button color="primary" onPress={onClose}>
                {textActionButton}
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};
export default MyModal;
