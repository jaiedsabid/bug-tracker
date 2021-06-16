import {Col, Container, Row} from "reactstrap";
import AddBugForm from "./AddBugForm";
import BugItem from "./BugItem";
import {connect} from "react-redux";
import {
    fetchBugs,
    postBug,
    removeBug,
    resolveBug
} from "../redux/ActionCreators";
import {useEffect, useState} from "react";

const mapStateToProps = state => {
    return {bugs: state.bugs};
};

const mapDispatchToProps = dispatch => ({
    fetchBugs: () => dispatch(fetchBugs()),
    postBug: (bug) => dispatch(postBug(bug)),
    removeBug: (id) => dispatch(removeBug(id)),
    resolveBug: (id, solution) => dispatch(resolveBug(id, solution))
});

function Home(props) {
    const [componentMounted, setComponentMounted] = useState(false);

    const {fetchBugs} = props;
    useEffect(() => {
        if(!componentMounted) {
            fetchBugs();
            setComponentMounted(true)
        }
    }, [fetchBugs, props.bugs]);

    const RenderBugItems = props.bugs.map(item => {
        return <BugItem key={item.id}
                        bug={item}
                        removeBug={props.removeBug}
                        resolveBug={props.resolveBug}
        />;
    });

    return (
        <Container>
            <Row className="mx-auto align-items-center align-content-center justify-content-center vh-100">
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