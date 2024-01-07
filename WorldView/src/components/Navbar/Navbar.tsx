'use client'
import { fetchAll, fetchFrance, fetchCountry } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../app/image/worldview2.png'
import '../Navbar/Navbar.css'

const Navbar = () => {
  const [name, setName] = useState('')

  return (
    <nav class="navbar">
      <Image src={logo} alt="/" />
      <ul>
        <li className="links">
          <Link href="/" className="linkstext">
            Home
          </Link>
        </li>
        <li className="links">
          <Link href="/about" className="linkstext">
            About
          </Link>
        </li>
      </ul>

      <div className="search">
        <input onChange={(e) => setName(e.target.value)} required></input>
        <Link href={`/name/${name}`} className="linkstext">
          Click to submit
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
