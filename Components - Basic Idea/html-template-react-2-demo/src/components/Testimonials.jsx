import CustomerReview from './TestimonialsComponents/CustomerReview'

export default function Testimonials() {
    return (
        <section className="testimonial section-padding" data-scroll-index='4'>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sectioner-header text-center white">
                            <h3>Testimonials</h3>
                            <span className="line"></span>
                            <p className="white">Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                        </div>

                        <div className="section-content">
                            <div className="row">
                                <div className="offset-md-2 col-md-8 col-sm-12">
                                    <div className="slider">
                                        <CustomerReview imagePath="images/user1.jpg" customerName="John Michal" customerPosition="Digital Designer" customerOpinion="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat." />
                                        <CustomerReview imagePath="images/user3.jpg" customerName="Steve Smith" customerPosition="App User" customerOpinion="Euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud v" />
                                        <CustomerReview imagePath="images/user3.jpg" customerName="John Michal" customerPosition="Digital Designer" customerOpinion="Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat." />
                                        
                                        <div className="slider-item">
                                            <div className="test-img"><img src="images/user3.jpg" alt="Placeholder" width="157" height="157" /></div>
                                            <div className="test-text"><span className="title"><span>Gordon Shaw</span> Blogger</span> Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud v</div>
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