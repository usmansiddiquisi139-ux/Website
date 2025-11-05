"use client"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="animation-container">
        <div className="lightning-container">
          <div className="lightning gold"></div>
          <div className="lightning amber"></div>
        </div>
        <div className="boom-container">
          <div className="shape circle big gold"></div>
          <div className="shape circle gold"></div>
          <div className="shape triangle big golden"></div>
          <div className="shape disc gold"></div>
          <div className="shape triangle amber"></div>
        </div>
        <div className="boom-container second">
          <div className="shape circle big gold"></div>
          <div className="shape circle gold"></div>
          <div className="shape disc gold"></div>
          <div className="shape triangle amber"></div>
        </div>
      </div>
    </div>
  )
}
