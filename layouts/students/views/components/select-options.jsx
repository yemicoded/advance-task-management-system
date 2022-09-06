import React from 'react'
import Container from '../../../../components/container'
import Select from '../../../../components/select'
import { languageOptions, countryOptions, genderOptions } from '../../../../constants/settings-select-options'
import RadioButton from '../../../../components/radio-button'

export default function LanguageSelect() {
      const [selectedOption, setSelectedoption]=React.useState(languageOptions[0])
      return (
            <Container classname='pb-4 lg:py-2'>
                  <Select label="Language" selectedOption={selectedOption} setSelectedOption={setSelectedoption} options={languageOptions} />
            </Container>
      )
}

export function CountrySelect() {
      const [selectedOption, setSelectedoption]=React.useState(countryOptions[0])
      return (
            <Container classname='pb-4 lg:py-2'>
                  <Select label="Country" selectedOption={selectedOption} setSelectedOption={setSelectedoption} options={countryOptions} />
            </Container>
      )
}

export function GenderSelect() {
      const [checked, setChecked]=React.useState(genderOptions[0].value)
      return (
            <Container classname='pb-4 lg:py-2'>
                  <RadioButton label="Gender" options={genderOptions} checked={checked} setChecked={setChecked} />
            </Container>
      )
}