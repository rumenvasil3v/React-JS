import SkillTracker from './SkillTracker'

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="skill-content">
                <div className="section-heading text-center">
                    <h2>skills</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="single-skill-content">
                                <SkillTracker skillName="adobe illustrator" skillPercentage="85%" />
                                <SkillTracker skillName="adobe after effects" skillPercentage="97%" />
                                <SkillTracker skillName="sketch" skillPercentage="90%" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="single-skill-content">
                                <SkillTracker skillName="html 5" skillPercentage="90%" />
                                <SkillTracker skillName="css 3 animation" skillPercentage="85%" />
                                <SkillTracker skillName="communication" skillPercentage="97%" />
                                <SkillTracker skillName="creativity" skillPercentage="90%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;
