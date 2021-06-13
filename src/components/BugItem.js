import {
    Button, Col,
    Input, Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Row, Collapse,
    Form, FormFeedback
} from "reactstrap";
import {useState} from "react";


export default function BugItem (props) {
    const [solution, setSolution] = useState("");
    const [modalState, setModalState] = useState(false);
    const [collapse, setCollapse] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const toggleCollapse = () => setCollapse(!collapse);
    const toggleModal = () => setModalState(!modalState);
    const handleChange = (event) => {
        let value = event.target.value;
        validate(value);
        setSolution(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(validate(event.target.solution.value)) {
            toggleModal();
            alert(`Solution: \n${solution}`);
            setSolution("");
        }
    };

    const validate = value => {
        if(value.length < 5 || value.length > 300 || value === "") {
            setIsValid(false);
            return false;
        } else {
            setIsValid(true);
            return true;
        }
    };

    return (
        <div id={props.id}
             className="row-cols-2 shadow-sm p-1 mb-2 rounded-0 bg-white rounded d-flex align-content-center justify-content-between"
        >
            <div onClick={toggleCollapse} className="col-8 col-lg-9 p-md-1 pr-2 mr-0">
                <p className="mb-0">
                    {props.bug}
                </p>
                <Collapse isOpen={collapse} toggle={toggleCollapse} className="w-100">
                    <hr/>
                    <h5 className="font-weight-bold">Solving steps/solution: </h5>
                    <p>{`Bug ${props.id} solution description`}</p>
                </Collapse>
            </div>
            <div className="col-4 col-lg-3 p-0 my-auto mx-auto d-flex justify-content-center">
                <Button onClick={toggleModal} id="resolved" color="success" className="rounded-0 mr-1">
                    <i className="fa fa-check"></i>
                </Button>
                <Button id="remove" color="danger" className="rounded-0">
                    <i className="fa fa-trash-o"></i>
                </Button>
            </div>
            <Modal isOpen={modalState} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>
                    Solving Steps
                </ModalHeader>
                <Form onSubmit={handleSubmit}>
                <ModalBody>
                    <Row>
                        <Col md={12}>
                            <Input type="textarea"
                                   placeholder="Describe your solving steps or solution"
                                   name="solution"
                                   id="solution"
                                   onChange={handleChange}
                                   value={solution}
                                   invalid={!isValid}
                                   valid={isValid}
                                   rows="7"
                            />
                            <FormFeedback invalid={!isValid} tooltip>
                                Please write your solution before submit
                            </FormFeedback>
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button name="submit" color="success">
                        Submit
                    </Button>
                    <Button name="cancel" color="danger" onClick={toggleModal}>
                        Cancel
                    </Button>
                </ModalFooter>
                </Form>
            </Modal>
        </div>
    );
}