'use client'
import { fetchCountry } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import Country from '../../../components/Country/Country'
import type { AppProps } from 'next/app'
import Navbar from '../../../components/Navbar/Navbar'

export default function Home({ params }: { params: { id: string } }) {
  const [country, setCountry] = useState(null)
  const code: string = params.id
  useEffect(() => {
    fetchCountry(code).then((data) => {
      setCountry(data[0])
    })
  }, [])
  return (
    <div>
      <Navbar />
      {country && (
        <div>
          <Country country={country} />
        </div>
      )}
    </div>
  )
}
