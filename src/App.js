import Layout from './component/Layout';
import { Switch, Route } from 'react-router-dom';
// import { CookiesProvider, useCookies } from 'react-cookie';
// import ProtectedRoute from './component/routes/Auth';
import About from './page/About';
import Cover from './page/Cover';
import Education from './page/Education';
import Project from './page/Project';
import Contact from './page/Contact';
import Resume from './page/Resume';
import Skill from './page/Skill';
import Login from './page/Login';
import Info from './page/Info';
import EditAbout from './page/editPage/EditAbout';
import EditInfo from './page/editPage/EditInfo';
import EditCover from './page/editPage/EditCover';
import EditProject from './page/editPage/projects/Eprojects';
import EditEducation from './page/editPage/education/Eeducation';
import EditSkill from './page/editPage/skills/Eskill';
import AddProject from './page/editPage/projects/Aproject';
import AddSkill from './page/editPage/skills/Askill';
import AddEducation from './page/editPage/education/Aeducation';
import UpdateProject from './page/editPage/projects/UpdateProject';
// import UpdateSkill from './page/editPage/skills/UpdateSkill';
import DeleteProject from './page/editPage/projects/DeleteProject';
import ReadMessage from './page/editPage/ReadMessage';
import Auth from './component/routes/Private';
// import PrivateRoute from './component/routes/Proute';
import PrivateCover from './component/routes/Pcover';
import PrivateMessage from './component/routes/Pmessages';
import PrivateAbout from './component/routes/Pabout';
import PrivateProject from './component/routes/Pproject';
import PrivateInfo from './component/routes/Pinfo';
import PrivateSkill from './component/routes/Pskill';
import PrivateEducation from './component/routes/Peducation';
// import AboutRoute from '.component/routes/EAbout';

function App() {
    // const [cookies, setCookie] = useCookies(['auth']);
    // function handleLogin(auth) {
    //     setCookie('auth', auth);
    // }
    return (
        // <CookiesProvider>
        <Layout>
            <Switch>
                {/* ABOUT */}
                <Route path="/" exact>
                    <About />
                </Route>
                <PrivateAbout path="/EditAbout" exact>
                    <EditAbout />
                </PrivateAbout>

                {/* COVER */}
                <PrivateCover path="/EditCover">
                    <EditCover />
                </PrivateCover>
                <Route path="/Cover">
                    <Cover />
                </Route>

                {/* RESUME */}
                <Route path="/Resume">
                    <Resume />
                </Route>

                {/* EDUCATION */}
                <Route path="/education">
                    <Education />
                </Route>
                <PrivateEducation path="/edit-education">
                    <EditEducation />
                </PrivateEducation>
                <PrivateEducation path="/add-education">
                    <AddEducation />
                </PrivateEducation>
                {/* <PrivateProject path="/project/delete/:id">
                    <DeleteProject />
                </PrivateProject>
                <PrivateProject path="/project/:id">
                    <UpdateProject />
                </PrivateProject> */}

                {/* PROJECT */}
                <PrivateProject path="/EditProject">
                    <EditProject />
                </PrivateProject>
                <PrivateProject path="/AddProject">
                    <AddProject />
                </PrivateProject>
                <PrivateProject path="/project/delete/:id">
                    <DeleteProject />
                </PrivateProject>
                <PrivateProject path="/project/:id">
                    <UpdateProject />
                </PrivateProject>
                <Route path="/Project">
                    <Project />
                </Route>

                {/* SKILL */}
                <Route path="/Skill">
                    <Skill />
                </Route>
                <PrivateSkill path="/edit-skill">
                    <EditSkill />
                </PrivateSkill>
                <PrivateSkill path="/add-skill">
                    <AddSkill />
                </PrivateSkill>
                {/* <PrivateSkill path="/skill/delete/:id">
                    <DeleteSkill />
                </PrivateSkill> */}
                {/* <PrivateSkill path="/skill/:id">
                    <UpdateSkill />
                </PrivateSkill> */}

                {/* INFO */}
                <Route path="/Info">
                    <Info />
                </Route>
                <PrivateInfo path="/EditInfo">
                    <EditInfo />
                </PrivateInfo>

                {/* MESSAGE */}
                <Route path="/page-cta">
                    <Contact />
                </Route>
                <PrivateMessage path="/ReadMessage">
                    <ReadMessage />
                </PrivateMessage>
                {/* <PrivateMessage path="/message/delete/:id">
                    <DeleteMessage />
                </PrivateMessage> */}

                {/* AURHORIZATON */}
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/Auth">
                    <Auth />
                </Route>
            </Switch>
        </Layout>
        // </CookiesProvider>
    );
}
export default App;
