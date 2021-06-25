import {Col, Container, Row} from "reactstrap";
import AddBugForm from "./AddBugForm";
import BugItem from "./BugItem";
import {connect} from "react-redux";
import {
    fetchBugs,
    postBug,
    removeBugReq,
    resolveBugReq
} from "../redux/ActionCreators";
import {useEffect, useState} from "react";

const mapStateToProps = state => {
    return {bugs: state.bugs};
};

const mapDispatchToProps = dispatch => ({
    fetchBugs: () => dispatch(fetchBugs()),
    postBug: (bug) => dispatch(postBug(bug)),
    removeBugReq: (id) => dispatch(removeBugReq(id)),
    resolveBugReq: (id, solution) => dispatch(resolveBugReq(id, solution))
});

function Home(props) {
    const [componentMounted, setComponentMounted] = useState(false);

    const {fetchBugs} = props;
    useEffect(() => {
        if(!componentMounted) {
            fetchBugs();
            setComponentMounted(true)
        }
    }, []);

    const RenderBugItems = props.bugs.map(item => {
        return <BugItem key={item.id}
                        bug={item}
                        removeBugReq={props.removeBugReq}
                        resolveBugReq={props.resolveBugReq}
        />;
    });

    return (
        <Container className="min-vh-100 h-100 d-flex align-items-center">
            <Row className="mx-auto justify-content-center w-100">
                <Col className="shadow bg-white rounded-0 py-4 col-12 col-sm-8">
                    <h1 className="text-center text-capitalize font-weight-bolder">Bug Tracker</h1>
                    <hr className="w-75 mb-5"/>
                    <Row>
                        <AddBugForm postBug={props.postBug} />
                    </Row>
                    <Row className="mt-5 justify-content-center">
                        <Col className="py-0 col-12 col-md-8 col-md-5">
                            <div className="list-group">
                                {RenderBugItems}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);