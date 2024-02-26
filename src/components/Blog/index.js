import React from "react";
import workflow from "../../img/workflow.svg";

const ExternalLink = ({ href, children }) => (
    <a
        className="btn-shutter-out-horizontal"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
    >
        {children} <i className="fas fa-external-link-alt"></i>
    </a>
);

class Blog extends React.Component {
    render() {
        return (
            <section id="blog" className="about-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="box-shadow-full">
                                <div className="row about-me">
                                    <div className="col-md-12">
                                        <div className="pt-4 pt-md-0">
                                            <div className="title-box-2">
                                                <h5 className="title title-left">
                                                    This website's infrastructure
                                                </h5>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <ExternalLink href="https://github.com/lamanh82">
                                                        ReadMe
                                                    </ExternalLink>
                                                </div>
                                                <div className="col-md-12 text-center">
                                                    <img src={workflow} alt="Workflow Diagram" className="workflow" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Blog;
