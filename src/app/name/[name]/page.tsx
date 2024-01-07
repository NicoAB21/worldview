'use client'
import { fetchCountry, fetchCountryName } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import Country from '../../../components/Country/Country'
import type { AppProps } from 'next/app'
import Navbar from '../../../components/Navbar/Navbar'
import { AxiosError } from 'axios'
import '../Name.css'
export default function Home({ params }: { params: { name: string } }) {
  const [country, setCountry] = useState(null)
  const name: string = params.name
  useEffect(() => {
    fetchCountryName(name).then((data) => setCountry(data[0]))
  }, [])

  return (
    <div>
      <Navbar />
      {country != null ? (
        <div>
          <Country country={country} />
        </div>
      ) : (
        <div>The country wasn't found</div>
      )}
    </div>
  )
}
