import AppFeature from "./AppFeature";

export default function Features() {
    return (
        <section className="feature section-padding" data-scroll-index='2'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center">
                            <h3>Features</h3>
                            <span className="line"></span>
                            <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                        </div>
                        <div className="section-content text-center">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <AppFeature featureName="Fast Processing" featureCharacteristics="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error!" />                   
                                    <AppFeature featureName="Low Power Consuming" featureCharacteristics="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error!" />                   
                                    <AppFeature featureName="Wifi Compatibility" featureCharacteristics="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error!" />                   
                                </div>
                                <div className="col-md-4 d-none d-md-block d-lg-block">
                                    <div className="feature-mobile"> <img src="images/iphone-screen-with-shadow.png" className="img-fluid wow fadeInUp" /> </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <AppFeature featureName="Regular Updates" featureCharacteristics="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error!" />
                                    <AppFeature featureName="Save Money" featureCharacteristics="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error!" />
                                    <AppFeature featureName="Unlimited Storage" featureCharacteristics="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error!" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}