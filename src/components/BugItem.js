import {Button} from "reactstrap";

export default function BugItem () {
    return (
        <div id="bug-item" className="row-cols-2 shadow-sm p-1 mb-2 rounded-0 bg-white rounded d-flex align-content-center justify-content-between">
            <div className="col-8 p-md-2 pr-2 mr-0">
                <p className="mb-0">
                    Bug 1
                </p>
            </div>
            <div className="col-3 p-0 my-auto mx-auto d-flex justify-content-end">
                <Button id="resolved" className="btn-success rounded-0"><i className="fa fa-check"></i></Button>
                <Button id="remove" className="btn-danger rounded-0"><i className="fa fa-trash-o"></i></Button>
            </div>
        </div>
    );
}