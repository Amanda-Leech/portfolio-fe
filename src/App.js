import Layout from './component/Layout';
import { Switch, Route } from 'react-router-dom';
// import { CookiesProvider, useCookies } from 'react-cookie';
// import ProtectedRoute from './component/routes/Auth';
import About from './page/about/Rabout';
import Cover from './page/cover/Rcover';
import Education from './page/education/Reducation';
import Project from './page/Project';
import Contact from './page/messages/Cmessage';
import Resume from './page/resume/Resume';
import Skill from './page/skills/Rskill';
import Login from './page/Login';
import Info from './page/Info';
import UpdateAbout from './page/about/Uabout';
import EditInfo from './page/editPage/EditInfo';
import EditCover from './page/cover/Ecover';
import EditProject from './page/projects/Eprojects';
import EditEducation from './page/education/Eeducation';
import EditSkill from './page/skills/Eskill';
import EditAbout from './page/about/Eabout';
import AddProject from './page/projects/Aproject';
import AddSkill from './page/skills/Cskill';
import AddEducation from './page/education/Ceducation';
import UpdateProject from './page/projects/Uproject';
import UpdateSkill from './page/skills/USkill';
import UpdateEducation from './page/education/Ueducation';
import UpdateCover from './page/cover/Ucover';
import DeleteProject from './page/projects/DeleteProject';
import ReadMessage from './page/messages/Rmessage';
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
                <PrivateAbout path="/EditAbout">
                    <EditAbout />
                </PrivateAbout>
                <PrivateAbout path="/about/id/:id">
                    <UpdateAbout />
                </PrivateAbout>

                {/* COVER */}
                <PrivateCover path="/EditCover">
                    <EditCover />
                </PrivateCover>
                <PrivateCover path="/cover/id/:id">
                    <UpdateCover />
                </PrivateCover>
                <Route path="/Cover">
                    <Cover />
                </Route>

                {/* RESUME */}
                <Route path="/Resume">
                    <Resume />
                </Route>

                {/* EDUCATION */}
                <Route path="/education" exact>
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
                </PrivateProject> */}
                <PrivateProject path="/education/:id">
                    <UpdateEducation />
                </PrivateProject>

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
                <Route path="/Project" exact>
                    <Project />
                </Route>

                {/* SKILL */}
                <Route path="/Skill" exact>
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
                <PrivateSkill path="/skill/:id">
                    <UpdateSkill />
                </PrivateSkill>

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
