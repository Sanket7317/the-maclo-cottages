import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCottageForm from "./CreateCottageForm";
import CottageTable from "./CottageTable";

function AddCottage() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cottage-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cottage-form">
          <CreateCottageForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCottage() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((show) => !show)}>
//         Add New Cottage
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal(false)}>
//           <CreateCottageForm onCloseModal={() => setIsOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCottage;
