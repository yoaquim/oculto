'use client'

import { useEffect, useState } from 'react'

interface ColoredTypingProps {
  text: string
  highlightWord: string
  highlightColor: string
  duration?: number
  className?: string
  startOnView?: boolean
}

export function ColoredTyping({
  text,
  highlightWord,
  highlightColor,
  duration = 100,
  className = '',
}: ColoredTypingProps) {
  const [displayedLength, setDisplayedLength] = useState(0)
  
  useEffect(() => {
    let i = 0
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedLength(i + 1)
        i++
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [text, duration])

  const renderText = () => {
    const displayedText = text.slice(0, displayedLength)
    const startIndex = text.indexOf(highlightWord)
    const endIndex = startIndex + highlightWord.length
    
    if (displayedLength <= startIndex) {
      // Haven't reached the highlight word yet
      return displayedText
    } else if (displayedLength > startIndex && displayedLength < endIndex) {
      // Currently typing the highlight word
      const beforeHighlight = text.slice(0, startIndex)
      const partialHighlight = text.slice(startIndex, displayedLength)
      return (
        <>
          {beforeHighlight}
          <span style={{ color: highlightColor }}>{partialHighlight}</span>
        </>
      )
    } else {
      // Past the highlight word
      const beforeHighlight = text.slice(0, startIndex)
      const afterHighlight = displayedText.slice(endIndex)
      return (
        <>
          {beforeHighlight}
          <span style={{ color: highlightColor }}>{highlightWord}</span>
          {afterHighlight}
        </>
      )
    }
  }

  return <div className={className}>{renderText()}</div>
}