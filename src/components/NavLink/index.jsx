import Link from 'next/link'
import {useRouter} from 'next/router'
import {Children, cloneElement} from 'react'

export const NavLink = ({href, children}) => {
  const {pathname} = useRouter()
  const child = Children.only(children)
  const childClass = child.props.className || null
  const isActive = childClass ? `${childClass} active` : 'active'

  const className = pathname === href ? isActive : childClass

  return <Link href={href}>{cloneElement(child, {className})}</Link>
}
