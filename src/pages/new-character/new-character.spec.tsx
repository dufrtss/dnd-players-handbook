import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { NewCharacter } from './new-character'
import { api } from '../../api/api'

// Mock dependencies
vi.mock('../../api/api', () => ({
  api: {
    post: vi.fn(() => Promise.resolve({ data: {} })),
    get: vi.fn(() => Promise.resolve({ data: {} }))
  }
}))

describe('NewCharacter Component', () => {
  it('renders without crashing', () => {
    render(<NewCharacter />)
    expect(screen.getByText(/Left icon/)).toBeDefined()
  })

  it('progresses through steps correctly', async () => {
    render(<NewCharacter />)

    const rightArrow = screen.getByAltText('Right icon')
    
    // Click through steps
    for (let i = 0; i < 5; i++) {
      fireEvent.click(rightArrow)
      expect(vi.mocked(api.post)).toHaveBeenCalled()
    }

    // Verify the character info is shown in the last step
    expect(screen.getByText(/Character Info/)).toBeDefined()
  })

  it('allows navigating backward through steps', async () => {
    render(<NewCharacter />)

    const rightArrow = screen.getByAltText('Right icon')
    fireEvent.click(rightArrow) // Move to Step 2

    const leftArrow = screen.getByAltText('Left icon')
    fireEvent.click(leftArrow) // Move back to Step 1

    expect(screen.getByText(/First Step/)).toBeDefined()
  })

})

