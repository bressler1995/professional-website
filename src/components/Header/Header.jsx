import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useState, useEffect } from 'react'
import './Header.css';

function Header() {
    const [theme, setTheme] = useState('dark')

    // Initialize theme preference (dark mode by default)
    useEffect(() => {
        // Check for saved theme preference or default to dark
        const savedTheme = localStorage.getItem('theme') || 'dark'
        setTheme(savedTheme)
        applyTheme(savedTheme)
    }, [])

    const applyTheme = (newTheme) => {
        const html = document.documentElement
        if (newTheme === 'dark') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
        localStorage.setItem('theme', newTheme)
    }

    const handleThemeChange = (value) => {
        if (value) {
            setTheme(value)
            applyTheme(value)
        }
    }

    return (
        <div id="eccent-header" className="absolute top-0 left-0 w-[70px] md:w-[300px] h-full z-3">
            <ul>
                <li key="nav-one">Home</li>
                <li key="nav-two">About</li>
                <li key="nav-three">Contact</li>
            </ul>
            
            {/* Theme Toggle */}
            <ToggleGroup 
                type="single" 
                value={theme} 
                onValueChange={handleThemeChange}
                variant="outline"
                className="mb-4"
            >
                <ToggleGroupItem value="light" aria-label="Light mode">
                    ☀️
                </ToggleGroupItem>
                <ToggleGroupItem value="dark" aria-label="Dark mode">
                    🌙
                </ToggleGroupItem>
            </ToggleGroup>
            
            <Button variant="outline">Contact</Button>
        </div>
    );
}

export default Header;