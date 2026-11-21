import { useState } from 'react';
import { AllProjectsScreen } from './components/AllProjectsScreen';
import { ContactFooter } from './components/ContactFooter';
import { CredentialsProcessSection } from './components/CredentialsProcessSection';
import { Header, type ActiveView } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InquiryDrawer } from './components/InquiryDrawer';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { SelectedProjects } from './components/SelectedProjects';
import { PROJECTS, type ProjectItem } from './data/portfolioData';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('overview');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [activeSkillFilter, setActiveSkillFilter] = useState<string | null>(
    null
  );
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateView = (view: ActiveView, sectionId?: string) => {
    setActiveView(view);
    if (view === 'archive') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    });
  };

  const handleToggleSkillFilter = (skill: string) => {
    const nextSkill = activeSkillFilter === skill ? null : skill;
    setActiveSkillFilter(nextSkill);
    if (nextSkill) {
      scrollToSection('projects');
    }
  };

  const handleOpenInquiry = (subject = '') => {
    setInquirySubject(subject);
    setSelectedProject(null);
    setIsInquiryOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0B0B0C] font-sans text-[#F5F5F7]">
      {/* Subtle Film Grain Overlay */}
      <div aria-hidden="true" className="grain-overlay" />

      <Header
        activeView={activeView}
        onNavigateView={handleNavigateView}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      <main>
        {activeView === 'overview' ? (
          <>
            <HeroSection
              onExploreProjects={() => scrollToSection('projects')}
            />
            <SelectedProjects
              projects={PROJECTS}
              activeSkillFilter={activeSkillFilter}
              onClearSkillFilter={() => setActiveSkillFilter(null)}
              onSelectProject={(project) => setSelectedProject(project)}
              onViewAllProjects={() => handleNavigateView('archive')}
            />
            <CredentialsProcessSection
              activeSkillFilter={activeSkillFilter}
              onToggleSkillFilter={handleToggleSkillFilter}
              onOpenInquiry={() => handleOpenInquiry()}
            />
          </>
        ) : (
          <AllProjectsScreen
            projects={PROJECTS}
            onBackOverview={() => handleNavigateView('overview', 'top')}
            onSelectProject={(project) => setSelectedProject(project)}
            onOpenInquiry={() => handleOpenInquiry()}
          />
        )}

        <ContactFooter
          projects={PROJECTS}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenInquiry={() => handleOpenInquiry()}
        />
      </main>

      <ProjectCaseStudyModal
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(project) => setSelectedProject(project)}
        onStartInquiryForProject={(title) => handleOpenInquiry(title)}
      />

      <InquiryDrawer
        isOpen={isInquiryOpen}
        initialSubject={inquirySubject}
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}
