'use client'
import { fetchAll, fetchFrance } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import CountryCard from '../components/CountryCard/CountryCard'
import Navbar from '../components/Navbar/Navbar'
import Image from 'next/image'
import './style.css'

export default function Home() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    fetchAll().then((response) => {
      setData(
        response.data.sort(function compare(a: any, b: any) {
          if (a.name.common < b.name.common) return -1
          if (a.name.common > b.name.common) return 1
          return 0
        })
      )
    })
  }, [])

  return (
    <div>
      <Navbar />
      <div className="basic-grid">
        {data &&
          data.map((country: any) => {
            return (
              <div key={country.cca3} className="card">
                <CountryCard country={country} />
              </div>
            )
          })}
      </div>
    </div>
  )
}
