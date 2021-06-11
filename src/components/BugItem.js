import {
    Button, Col,
    Input, Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Row, Collapse
} from "reactstrap";
import {useState} from "react";


export default function BugItem (props) {
    const [solution, setSolution] = useState("");
    const [modalState, setModalState] = useState(false);
    const [collapse, setCollapse] = useState(false);

    const toggleCollapse = () => setCollapse(!collapse);
    const toggleModal = () => setModalState(!modalState);
    const handleChange = (event) => {
        setSolution(event.target.value);
    };

    return (
        <div id={props.id}
             className="row-cols-2 shadow-sm p-1 mb-2 rounded-0 bg-white rounded d-flex align-content-center justify-content-between"
        >
            <div onClick={toggleCollapse} className="col-8 p-md-2 pr-2 mr-0">
                <p className="mb-0">
                    {props.bug}
                </p>
                <Collapse isOpen={collapse} toggle={toggleCollapse}>
                    <hr/>
                    <h5 className="font-weight-bold">Solving steps/solution: </h5>
                    <p>{`Bug ${props.id} solution description`}</p>
                </Collapse>
            </div>
            <div className="col-3 p-0 my-auto mx-auto d-flex justify-content-end">
                <Button onClick={toggleModal} id="resolved" className="btn-success rounded-0 mr-1">
                    <i className="fa fa-check"></i>
                </Button>
                <Button id="remove" className="btn-danger rounded-0">
                    <i className="fa fa-trash-o"></i>
                </Button>
            </div>
            <Modal isOpen={modalState} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Solving Steps
                </ModalHeader>
                <ModalBody>
                    <Row>
                        <Col md={12}>
                            <Input type="textarea"
                                   placeholder="Describe your solving steps or solution"
                                   name="solution"
                                   id="solution"
                                   onChange={handleChange}
                                   value={solution}
                                   rows="7"
                            />
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button className="btn-success">
                        Submit
                    </Button>
                    <Button className="btn-danger" onClick={toggleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}