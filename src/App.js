import React, {Fragment} from 'react';
// import styles from './App.module.css';
import CoursesList from "./CoursesList/CoursesList";
import Header from "./Header/Header";
import WhatCanISuggest from "./WhatCanISuggest/WhatCanISuggest";
import Stack from "./Stack/Stack";
import WorkExperience from "./WorkExperience/WorkExperience";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";


function App() {

    return (
        <Fragment>
            <Header/>
            <WhatCanISuggest/>
            <Stack/>
            <CoursesList/>
            <Education/>
            <WorkExperience/>
            <AboutMe/>
        </Fragment>
    );
}

export default App;
