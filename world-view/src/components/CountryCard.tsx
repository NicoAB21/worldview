'use client'
import { fetchAll, fetchFrance, fetchCountry } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const CountryCard = (country) => {
  const [data, setData] = useState(country.country)
  console.log(data)

  return (
    <>
      {data && (
        <Link href={`/country/${data.ccn3}`}>
          <img className="flags" src={data.flags.png} />
          <div>Pays :{data.name.common}</div>
        </Link>
      )}
    </>
  )
}

export default CountryCard
