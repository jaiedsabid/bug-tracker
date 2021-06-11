import {Button, FormGroup, Form, Input} from "reactstrap";

export default function AddBugForm (){
    return (
        <Form inline className="justify-content-center w-100">
            <FormGroup className="col-8 mb-0 mr-0 pr-0">
                <Input type="text"
                       className="w-100 rounded-0"
                       name="todo"
                       id="add-bug-input"
                       placeholder="ex. bug 1" />
            </FormGroup>
            <Button id="add-bug-btn" className="ml-0 btn-primary rounded-0"><i className="fa fa-plus"></i></Button>
        </Form>
    );
};