import { useState } from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About';

function App() {
    const [drawerOpen, setDrawerOpen] = useState(false);
	const openDrawer = () => setDrawerOpen(true);
	const closeDrawer = () => setDrawerOpen(false);

    return (
        <div className={`bg-[#F4F9FD] text-darkblue font-sans tracking-wider leading-loose ${drawerOpen ? '!bg-gray-900/50 !backdrop-blur-sm !pointer-events-none' : ''}`}>
            <Navigation open={drawerOpen} openDrawer={openDrawer} closeDrawer={closeDrawer} />
            <Main />
            <About />
			<Experience />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
