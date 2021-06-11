import {Button, FormGroup, Form, Input} from "reactstrap";

export default function AddBugForm (){
    return (
        <Form inline className="justify-content-center w-100">
            <FormGroup className="col-8 mb-0 mr-1 pr-0">
                <Input type="text"
                       className="w-100"
                       name="todo"
                       id="todo"
                       placeholder="ex. bug 1" />
            </FormGroup>
            <Button className="ml-0 btn-primary rounded-0"><i className="fa fa-plus"></i></Button>
        </Form>
    );
};