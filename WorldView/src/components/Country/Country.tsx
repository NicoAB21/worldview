'use client'
import { fetchAll, fetchFrance, fetchCountry } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import '../Country/Country.css'

const Country = (country) => {
  const [data, setData] = useState(country.country)
  const nativenames = []
  for (const key in data.name.nativeName) {
    nativenames.push(data.name.nativeName[key])
  }
  let commonnames = ''
  let officialnames = ''
  nativenames.map((names) => {
    commonnames += ' / ' + names.common
    officialnames += ' / ' + names.official
  })
  let borders = ''
  let isborders = false
  {
    data.borders &&
      data.borders.map((names, index) => {
        if (index === data.borders.length - 1) {
          borders += names
        } else {
          borders += names + ' / '
        }
        isborders = true
      })
  }

  let currencies = []
  for (const key in data.currencies) {
    currencies.push(data.currencies[key])
  }
  let all_currencies = ''
  currencies.map((currency) => {
    all_currencies += currencies[0].name + ' '
  })

  let gini = ''
  for (const key in data.gini) {
    gini = data.gini[key]
  }

  let languages = ''
  for (const key in data.languages) {
    languages += data.languages[key] + ' '
  }

  let gentiles = []
  let gentiles_lang = []
  for (const key in data.demonyms) {
    gentiles_lang.push(key)
    gentiles.push(data.demonyms[key])
  }
  let all_demonym = []
  gentiles.map((names, index) => {
    all_demonym.push(
      gentiles_lang[index].toUpperCase() + ':' + ' Female: ' + names.f + ' / ' + ' Male: ' + names.m + ' '
    )
  })

  return (
    <div className="all">
      {data && (
        <div>
          <img src={data.flags.png} />
          <h1>{data.name.common}</h1>

          <h2>Basic Country Information</h2>
          <div>
            Common Name: {data.name.common} {commonnames}
          </div>
          <div>
            Official Name: {data.name.official} {officialnames}
          </div>
          <div>TLD: {data.tld}</div>

          <h2>Geographical Data</h2>
          <div>Latitude: {data.latlng[0]}°</div>
          <div>Longitude: {data.latlng[1]}°</div>
          <div>Area: {data.area} km²</div>
          {isborders === true ? <div>Borders: {borders}</div> : <div>Borders: None</div>}
          <div>Region: {data.region}</div>
          <div>Subegion: {data.subregion}</div>

          <h2>Political and Administrative Data</h2>
          <div>Capital: {data.capital}</div>
          {data.independent === true ? <div>The country is independant</div> : <div>The country isn't independant</div>}
          {data.unMember === true ? (
            <div>The country is member of the United Nations</div>
          ) : (
            <div>The country isn't member of the United Nations</div>
          )}

          <h2>Economic and Demographic Data</h2>
          <div>Population: {data.population}</div>
          <div>Currencies: {all_currencies}</div>
          <div>GINI: {gini}</div>

          <h2>Cultural Data</h2>
          <div>Languages: {languages}</div>
          <div>
            Demonym :{' '}
            {all_demonym.map((names) => {
              return <div>{names}</div>
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Country
