import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { canonicalFor, pageFor } from '../config/seo.js'

function setContent(selector, value) {
  const el = document.querySelector(selector)
  if (el) el.setAttribute('content', value)
}

// Keeps the title, description and canonical link in step with the current route.
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const { path, title, description } = pageFor(pathname)
    const url = canonicalFor(path)

    document.title = title
    setContent('meta[name="description"]', description)
    setContent('meta[property="og:title"]', title)
    setContent('meta[property="og:description"]', description)
    setContent('meta[property="og:url"]', url)
    setContent('meta[name="twitter:title"]', title)
    setContent('meta[name="twitter:description"]', description)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
  }, [pathname])

  return null
}
