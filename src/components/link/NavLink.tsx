import Link, { LinkProps } from "next/link"
import React, { FC, HTMLAttributes } from "react"
import { useRouter } from "next/router"

const NavLink: React.FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
  className,
  ...props
}) => {
  const router = useRouter()
  let activeNav = href === `${router.pathname}`
  return (
    <Link
      href={href}
      className={`${activeNav ? "text-purple-300" : ""} ${className}  text-gray-300`}
      {...props}
    >
      {children}
    </Link>
  )
}
export default NavLink
