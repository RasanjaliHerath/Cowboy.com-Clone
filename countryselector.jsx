import { Listbox } from '@headlessui/react'
import React from 'react';



const countries = [
  { name: 'Belgie', lang: 'Nederlands' },
  { name: 'Belgique', lang: 'Français' },
  { name: 'Danmark', lang: 'English' },
  { name: 'Deutschland', lang: 'Deutsch' },
  { name: 'España', lang: 'English' },
  { name: 'France', lang: 'Français' },
  { name: 'Italia', lang: 'English' },
  { name: 'Luxembourg', lang: 'English' },
  { name: 'Nederland', lang: 'Nederlands' },
  { name: 'Österreich', lang: 'Deutsch' },
  { name: 'Sverige', lang: 'English' },
  { name: 'United Kingdom', lang: 'English' },
  { name: 'United States', lang: 'English' }
]

export default function CountrySelector() {
  const [selected, setSelected] = React.useState(countries[0])

  return (
    <div className="w-64">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="w-full bg-transparent text-white border border-gray-600 p-2 text-left">
          <span>{selected.name} <span className="text-gray-400">/ {selected.lang}</span></span>
        </Listbox.Button>
        <Listbox.Options className="bg-black border border-gray-600 mt-1 rounded">
          {countries.map((country) => (
            <Listbox.Option
              key={country.name}
              value={country}
              className={({ active }) =>
                `cursor-pointer p-2 ${
                  active ? 'bg-gray-700' : ''
                } text-white`
              }
            >
              {({ selected }) => (
                <span>
                  {country.name} <span className="text-gray-400">/ {country.lang}</span>
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
