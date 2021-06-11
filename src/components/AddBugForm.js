import {Button, FormGroup, Form, Input} from "reactstrap";
import {useState} from "react";

export default function AddBugForm(props) {
    const [bug, setBug] = useState("");

    const handleChange = (event) => {
        setBug(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bug: \n${bug}`);
        setBug("");
    }

    return (
        <Form inline onSubmit={handleSubmit} className="justify-content-center w-100">
            <FormGroup className="col-8 mb-0 mr-0 pr-0">
                <Input type="text"
                       className="w-100 rounded-0"
                       name="bug"
                       value={bug}
                       onChange={handleChange}
                       id="bug"
                       placeholder="ex. bug 1" />
            </FormGroup>
            <Button id="add-bug-btn" className="ml-0 btn-primary rounded-0">
                <i className="fa fa-plus"></i>
            </Button>
        </Form>
    );
};