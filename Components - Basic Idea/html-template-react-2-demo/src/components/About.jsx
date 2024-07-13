import AppAdvantage from "./AboutComponents/AppAdvantage";

export default function About() {
    return (
        <section className="about section-padding prelative" data-scroll-index='1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center">
                                <h3>About</h3>
                                <span className="line"></span>
                                <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>
                            <div className="section-content text-center">
                                <div className="row">
                                    <AppAdvantage advantageName="Support" advantageDescription='Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.' />       
                                    <AppAdvantage advantageName="Cross Platform" advantageDescription='Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.' />       
                                    <AppAdvantage advantageName="Fast" advantageDescription='Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.' />       
                                </div>
                                <a href="#" className="about-btn">Learn More</a> </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}