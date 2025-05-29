import { describe, it, expect, vi } from 'vitest'
import { api } from '../../api/api'
import { saveRace, saveClass, saveBackground, saveSelectedProficiencies, saveSelectedLanguages } from './new-character'

// Mock the API module
vi.mock('../../api/api', () => ({
  api: {
    post: vi.fn(() => Promise.resolve())
  }
}))

// Sample setup for a basic test
describe('New Character Functions', () => {

  it('should correctly save race', async () => {
    const mockResponse = { data: {} }
    api.post.mockResolvedValue(mockResponse)

    const result = await saveRace()

    expect(api.post).toHaveBeenCalledWith('/characters/undefined/race', { raceType: '' })
    expect(result).toBeDefined()
  })

  it('should correctly save class', async () => {
    const mockResponse = { data: {} }
    api.post.mockResolvedValue(mockResponse)

    const result = await saveClass()

    expect(api.post).toHaveBeenCalledWith('/characters/undefined/class', { classType: '' })
    expect(result).toBeDefined()
  })

  it('should correctly save background', async () => {
    const mockResponse = { data: {} }
    api.post.mockResolvedValue(mockResponse)

    const result = await saveBackground()

    expect(api.post).toHaveBeenCalledWith('/characters/undefined/background', { backgroundType: '' })
    expect(result).toBeDefined()
  })

  it('should correctly save selected proficiencies', async () => {
    const mockResponse = { data: {} }
    api.post.mockResolvedValue(mockResponse)

    const result = await saveSelectedProficiencies()

    expect(api.post).toHaveBeenCalledWith('/characters/undefined/skill', [])
    expect(result).toBeDefined()
  })

  it('should correctly save selected languages', async () => {
    const mockResponse = { data: {} }
    api.post.mockResolvedValue(mockResponse)

    const result = await saveSelectedLanguages()

    expect(api.post).toHaveBeenCalledWith('/characters/undefined/language', [])
    expect(result).toBeDefined()
  })

})

