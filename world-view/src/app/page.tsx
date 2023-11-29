'use client'
import { fetchAll, fetchFrance } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import CountryCard from '../components/CountryCard'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import '../app/style.css'

export default function Home() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchAll().then((response) => {
      setData(
        response.data.sort(function compare(a, b) {
          if (a.name.common < b.name.common) return -1
          if (a.name.common > b.name.common) return 1
          return 0
        })
      )
    })
  }, [])

  return (
    <div className="all">
      <Navbar />
      {data &&
        data.map((country, index) => {
          return (
            <div key={country.cca3} className="country-home">
              <CountryCard country={country} />
            </div>
          )
        })}
    </div>
  )
}
