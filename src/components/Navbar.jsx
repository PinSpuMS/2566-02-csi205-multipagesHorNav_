import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [tab, setTab] = useState('home')
  const homeTabRef = useRef()

  useEffect(() => {
    setTab('home')
    homeTabRef.current.click()
  }, []) // reload

  return (
    <div style={{ margin: '5px' }}>
      <Link to={'/'}>
        <button
          className={
            'btn btn-outline-primary button-spacing' +
            (tab === 'home' ? ' active' : '')
          }
          onClick={() => {
            setTab('home')
          }}
          ref={homeTabRef}
        >
          Home
        </button>
      </Link>
      <Link to={'/products'}>
        <button
          className={
            'btn btn-outline-primary button-spacing' +
            (tab === 'products' ? ' active' : '')
          }
          onClick={() => setTab('products')}
        >
          Products
        </button>
      </Link>
      <Link to={'/carts'}>
        <button
          className={
            'btn btn-outline-primary button-spacing' +
            (tab === 'carts' ? ' active' : '')
          }
          onClick={() => setTab('carts')}
        >
          Carts
        </button>
      </Link>
      <Link to={'/about'}>
        <button
          className={
            'btn btn-outline-primary button-spacing' +
            (tab === 'about' ? ' active' : '')
          }
          onClick={() => setTab('about')}
        >
          About
        </button>
      </Link>
    </div>
  )
}
