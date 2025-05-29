/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useEffect, useState } from 'react'
import * as Progress from '@radix-ui/react-progress'
import styles from './new-character.module.scss'
import SecondStep from '../../components/steps/second-step/second-step'
import FirstStep from '../../components/steps/first-step/first-step'
import CharacterInfo from '../../components/character-info/character-info'
import ThirdStep from '../../components/steps/third-step/third-step'
import FifthStep from '../../components/steps/fifth-step/fifth-step'
import FourthStep from '../../components/steps/fourth-step/fourth-step'
import { api } from '../../api/api'
import { useParams } from 'react-router'

enum Steps {
  RACE = 1,
  CLASS = 2,
  BACKGROUND = 3,
  ABILITIES = 4,
  PROFICIENCIES = 5,
  EQUIPMENT = 6,
}

type CharacterType = object

export function NewCharacter() {
  const [step, setStep] = useState<Steps>(Steps.RACE)
  const [progress, setProgress] = useState(0)
  const [character, setCharacter] = useState<CharacterType>()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedRace, setSelectedRace] = useState<string>('')
  const [selectedProficiencies, setSelectedProficiencies] = useState<string[]>([])
  const [selectedClass, setSelectedClass] = useState<string>('')
  const [selectedBackground, setSelectedBackground] = useState<string>('')
  const [selectedLanguages, setSelectedLanguages] = useState<{ languageType: string }[]>([])

  const params = useParams()

  async function getCharacter(idCharacter: string) {
    return await api.get(`/characters/${idCharacter}`)
  }

  function fluentApi(promise: Promise<any>) {
    const api = {
      then: (callback: any) => {
        promise = promise.then(callback)
        return api
      },
      catch: (callback: any) => {
        promise = promise.catch(callback)
        return api
      }
    }
    return api
  }

  function updateCharacter(response: { data: SetStateAction<object | undefined>; }) {
    setCharacter(response.data)
    setIsLoading(false)
  }

  useEffect(() => {
    const idCharacter: string = params.idCharacter!

    const character = getCharacter(idCharacter)

    setCharacter(character)

  },[params.idCharacter])

  async function handleNextStep() {
    switch (step) {
    case 1:
      saveRace()
      break
    case 2:
      saveClass()
      break
    case 3:
      saveBackground()
      break
    case 4:
      saveSelectedProficiencies()
      break
    case 5:
      saveSelectedLanguages()
      break
    }
    if (step < 6) {
      const newStep = step + 1
      setProgress(step * 20)
      setStep(newStep)
      setIsLoading(false)
    }
  }

  const changeSelectedLanguages = async (languages: { languageType: string }[]) => {
    setSelectedLanguages(languages)
  }

  function saveSelectedLanguages() {
    if (!isLoading) {
      setIsLoading(true)
      return fluentApi(api.post(`/characters/${params.idCharacter}/language`, selectedLanguages))
        .then(updateCharacter)
    }
  }

  const changeSelectedProficiencies = async (proficiencies: string[]) => {
    setSelectedProficiencies(proficiencies)
  }

  function saveSelectedProficiencies() {
    if (!isLoading) {
      setIsLoading(true)
      return fluentApi(api.post(`/characters/${params.idCharacter}/skill`, selectedProficiencies))
        .then(updateCharacter)
    }
  }

  const changeSelectedRace = async (race: string) => {
    setSelectedRace(race)
  }

  function saveRace() {
    if (!isLoading) {
      setIsLoading(true)
      return fluentApi(api.post(`/characters/${params.idCharacter}/race`, { raceType: selectedRace }))
        .then(updateCharacter)
    }
  }

  function saveClass() {
    if (!isLoading) {
      setIsLoading(true)
      return fluentApi(api.post(`/characters/${params.idCharacter}/class`, { classType: selectedClass }))
        .then(updateCharacter)
    }
  }

  const changeSelectClass = async (characterClass: string) => {
    setSelectedClass(characterClass)
  }

  function saveBackground() {
    if (!isLoading) {
      setIsLoading(true)
      return fluentApi(api.post(`/characters/${params.idCharacter}/background`, { backgroundType: selectedBackground }))
        .then(updateCharacter)
    }
  }

  const changeSelectedBackground = async (background: string) => {
    setSelectedBackground(background)
  }

  function handlePreviousStep() {
    if (step > 1) {
      const newStep = step - 1
      setProgress(Math.ceil(newStep * 20 - 20))
      setStep(newStep)
    }
  }

  return (
    <>
      <div className={styles.containerStyle}>
        <div
          style={{ flexDirection: 'row', flex: 1 }}
          className={styles.boardStyle}
        >
          <div className={styles.stepsContainer}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {step !== Steps.RACE && (
                <button onClick={handlePreviousStep}>
                  <img src="/src/assets/chavron-left.svg" alt="Left icon" />
                </button>
              )}
            </div>

            <div className={styles.slideStyle}>
              {step === Steps.RACE && <FirstStep changeRace={changeSelectedRace}/>}
              {step === Steps.CLASS && <SecondStep changeClass={changeSelectClass} />}
              {step === Steps.BACKGROUND && <ThirdStep changeBackground={changeSelectedBackground}/>}
              {step === Steps.ABILITIES && <FourthStep changeProficiencies={changeSelectedProficiencies}/>}
              {step === Steps.PROFICIENCIES && <FifthStep changeSelectedLanguages={ changeSelectedLanguages }/>}
              {step === Steps.EQUIPMENT &&  <CharacterInfo characterSaved={ character }/>}
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              {step !== Steps.EQUIPMENT && (
                <button className={styles.forwardArrow} onClick={handleNextStep}>
                  <img src="/src/assets/chavron-right.svg" alt="Right icon" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Progress.Root className={styles.ProgressRoot} value={progress}>
        <Progress.Indicator
          className={styles.ProgressIndicator}
          style={{ transform: `translateX(-${100 - progress}%)` }}
        />
      </Progress.Root>
    </>
  )
}
