import { ContactInfo, Education, Skills, Summary, WorkExperience, Projects, Languages } from './components/sections';
import { useDocumentTitle } from './hooks';

function App() {
  useDocumentTitle();

  return (
    <div className="paper mx-auto p-3">
      <ContactInfo />

      <Summary />

      <WorkExperience />

      <Education />

      <Skills />

      <Projects />

      <Languages />
    </div>
  );
}

export default App;
