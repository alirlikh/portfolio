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
      className={`${
        activeNav ? "text-purple-300" : ""
      } ${className} transition-all  duration-150 delay-50 hover:brightness-[0.6]`}
      {...props}
    >
      {children}
    </Link>
  )
}
export default NavLink
