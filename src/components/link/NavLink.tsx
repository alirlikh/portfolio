import Link, { LinkProps } from "next/link"
import React, { FC, HTMLAttributes } from "react"

const NavLink: React.FC<LinkProps & HTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
  className,
  ...props
}) => {
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  )
}
export default NavLink
