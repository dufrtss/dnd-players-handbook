import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import 'vitest-dom'
import { NewCharacter } from './new-character'
import { api } from '../../api/api'
import { MemoryRouter } from 'react-router-dom'
// Mock dependencies
vi.mock('../../api/api', () => ({
  api: {
    post: vi.fn(() => Promise.resolve({ data: {} })),
    get: vi.fn(() => Promise.resolve({ data: {} }))
  }
}))

describe('NewCharacter Component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <NewCharacter />
      </MemoryRouter>
    )
    expect(screen.queryByAltText('Left icon')).toBeInTheDocument()
  })

  it('progresses through steps correctly', async () => {
    render(
      <MemoryRouter>
        <NewCharacter />
      </MemoryRouter>
    )

    const rightArrows = screen.getAllByAltText('Right icon')
    const rightArrow = rightArrows[0]
    
    for (let i = 0; i < 5; i++) {
      fireEvent.click(rightArrow)
      expect(vi.mocked(api.post)).toHaveBeenCalled()
    }

    expect(screen.queryByText((content) => content.includes('Character Info'))).toBeInTheDocument()
  })

  it('allows navigating backward through steps', async () => {
    render(
      <MemoryRouter>
        <NewCharacter />
      </MemoryRouter>
    )

    const rightArrows = screen.getAllByAltText('Right icon')
    const rightArrow = rightArrows[0] 
    fireEvent.click(rightArrow)

    const leftArrows = screen.getAllByAltText('Left icon')
    const leftArrow = leftArrows[0]
    fireEvent.click(leftArrow)

    expect(screen.queryByText((content) => content.includes('First Step'))).toBeInTheDocument()
  })

})

