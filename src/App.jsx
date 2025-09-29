import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const targetDate = new Date()
  targetDate.setDate(targetDate.getDate() + 30)

  const calculateTimeLeft = () => {
    const now = new Date().getTime()
    const distance = targetDate.getTime() - now
    if (distance <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    return { days, hours, minutes, seconds }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="coming-soon__wrap">
      <div className="animated-bg">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <header className="brand">
        <span className="brand__badge">Guess Masters</span>
      </header>

      <main className="content">
        <h1 className="title">
          
          <span className="title__text">Coming Soon</span>
        </h1>
        <p className="subtitle">We’re crafting something awesome. Stay tuned with us.</p>

        <div className="countdown">
          {/* <div className="time">
            <span className="num">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div> */}
          <div className="sep">:</div>
          <div className="time">
            <span className="num">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="sep">:</div>
          <div className="time">
            <span className="num">{timeLeft.minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="sep">:</div>
          <div className="time">
            <span className="num">{timeLeft.seconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>

      </main>

      <footer className="footnote">
        <span>© 2025 TechEagles — Education Solutions | Backed by Mahakumbrix Entrepreneurship</span>
      </footer>
    </div>
  )
}

export default App
