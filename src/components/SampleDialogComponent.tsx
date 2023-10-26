import { useState } from "react";
import Dialog from "../common/GenericDialog";
import TestFilterComponent from "./SampleFilterDropdown";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setModalOpen(true)}>Open Modal Dialog</button>
      <button onClick={() => setDialogOpen(true)}>Open Regular Dialog</button>
      <p>
        an dropdown filter to test that that the user can still interact if a
        regular dialog{" "}
      </p>
      <TestFilterComponent />
      <Dialog
        isOpen={modalOpen}
        closeDialog={() => setModalOpen(false)}
        isModal={true}
        body={
          <div>
            <p>Are you sure you want to delete this team?</p>
            <div>
              <button>Yes</button>{" "}
              <button onClick={() => setModalOpen(false)}>No</button>{" "}
            </div>
          </div>
        }
      />
      <Dialog
        isOpen={dialogOpen}
        closeDialog={() => setDialogOpen(false)}
        isModal={false}
        header={
          <div>
            <h1>Billions</h1>
          </div>
        }
        body={
          <div>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src={require("../assets/images/image1.jpg")} alt="image" />
          </div>
        }
        footer={<button onClick={() => setDialogOpen(false)}>Close</button>}
      />
    </div>
  );
}

export default App;
