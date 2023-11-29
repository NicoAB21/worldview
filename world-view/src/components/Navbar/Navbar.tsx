'use client'
import { fetchAll, fetchFrance, fetchCountry } from '@/services/AllCountries/FetchCountries'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../app/image/worldview.png'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar">
      <img src={logo} />
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>

      <div className="inputnav">
        <input type="text" placeholder="Entrez un pays" />
      </div>
    </nav>
  )
}

export default Navbar
