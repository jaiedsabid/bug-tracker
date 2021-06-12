import {Button, FormGroup, Form, Input} from "reactstrap";
import {useState} from "react";

export default function AddBugForm(props) {
    const [bug, setBug] = useState("");
    const [isValid, setIsValid] = useState(true);

    const validate = (value) => {
        if(value.length < 8 || value.length > 150 || value === "") {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    };

    const handleChange = (event) => {
        let value = event.target.value;
        validate(value);
        setBug(value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bug: \n${bug}`);
        setBug("");
        setIsValid(true);
    }
    const handleBlur = () => {
        validate(bug);
    };

    return (
        <Form inline onSubmit={handleSubmit} className="justify-content-center w-100">
            <FormGroup className="col-8 mb-0 mr-0 pr-0">
                <Input type="text"
                       className="w-100 rounded-0"
                       name="bug"
                       value={bug}
                       onChange={handleChange}
                       id="bug"
                       placeholder="ex. bug 1"
                       valid={isValid}
                       invalid={!isValid}
                       onBlur={handleBlur}
                />
            </FormGroup>
            <Button id="add-bug-btn" className="ml-0 btn-primary rounded-0" disabled={!isValid}>
                <i className="fa fa-plus"></i>
            </Button>
        </Form>
    );
};