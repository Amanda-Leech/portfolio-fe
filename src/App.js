import Layout from './component/Layout';
import { Switch, Route } from 'react-router-dom';
import About from './page/About';
import Cover from './page/Cover';
import Education from './page/Education';
import Project from './page/Project';
import Contact from './page/Contact';
import Resume from './page/Resume';
import Skill from './page/Skill';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <About />
                </Route>
                <Route path="/Cover">
                    <Cover />
                </Route>
                <Route path="/Resume">
                    <Resume />
                </Route>
                <Route path="/Education">
                    <Education />
                </Route>
                <Route path="/Project">
                    <Project />
                    <Route path="/Skill">
                        <Skill />
                    </Route>
                </Route>
                <Route path="/page-cta">
                    <Contact />
                </Route>
            </Switch>
        </Layout>
    );
}
export default App;
