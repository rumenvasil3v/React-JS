function JobPosition(props) {
    return (
        <li>
            <div className="single-timeline-box fix">
                <div className="row">
                    <div className="col-md-5">
                        <div className="experience-time text-right">
                            <h2>{props.positionDuration}</h2>
                            <h3>{props.position}</h3>
                        </div>
                    </div>
                    <div className="col-md-offset-1 col-md-5">
                        <div className="timeline">
                            <div className="timeline-content">
                                <h4 className="title">
                                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                                    {props.companyName}
                                </h4>
                                <h5>{props.positionPlace}</h5>
                                <p className="description">
                                    {props.positionDescription}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default JobPosition;
