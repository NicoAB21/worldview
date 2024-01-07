'use client'
import { fetchAll, fetchFrance, fetchCountry } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import './CountryCard.css'

const CountryCard = (country: any) => {
  const [data, setData] = useState(country.country)
  console.log(data)

  return (
    <>
      {data && (
        <Link href={`/country/${data.ccn3}`} className="country-name">
          <img className="flags" src={data.flags.png} />
          <div>{data.name.common}</div>
        </Link>
      )}
    </>
  )
}

export default CountryCard
