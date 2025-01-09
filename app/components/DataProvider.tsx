'use client'

import { useEffect, useState } from 'react'

export default function DataProvider() {
  const [products, setProducts] = useState([])
  const [deliveries, setDeliveries] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, deliveriesRes] = await Promise.all([
          fetch('/api/products'),
          fetch('/api/deliveries')
        ])
        
        const productsData = await productsRes.json()
        const deliveriesData = await deliveriesRes.json()
        
        setProducts(productsData)
        setDeliveries(deliveriesData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return null // Or render components that need this data
} 