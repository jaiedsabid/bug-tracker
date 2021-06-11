import {Col, Container, Row} from "reactstrap";
import AddBugForm from "./AddBugForm";
import BugItem from "./BugItem";

export default function Home() {
    return (
        <Container>
            <Row className="mx-auto align-items-center align-content-center justify-content-center vh-100">
                <Col className="shadow bg-white rounded py-4 col-12 col-sm-8">
                    <h1 className="text-center text-capitalize font-weight-bolder">Bug Tracker</h1>
                    <hr className="w-75 mb-5"/>
                    <Row>
                        <AddBugForm />
                    </Row>
                    <Row className="mt-5 justify-content-center">
                        <Col className="py-0 col-12 col-md-8 col-md-5">
                            <div className="list-group">
                                <BugItem />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}