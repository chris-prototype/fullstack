import TopBar from './components/TopBar';
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';

export default function App() {
  return (
    <>
      <TopBar />

      <main className="page">
        <HeroSection />
        <ContentSection />
      </main>
    </>
  );
}
