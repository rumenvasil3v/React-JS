export default function AppAdvantage(props) {
    return (
        <div className="col-md-4">
            <div className="icon-box wow fadeInUp" data-wow-delay="0.2s"> <i className="fa fa-life-ring" aria-hidden="true"></i>
                <h5>{props.advantageName}</h5>
                <p>{props.advantageDescription}</p>
            </div>
        </div>
    );
}
