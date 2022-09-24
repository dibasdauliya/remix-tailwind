import React from 'react'

export default function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={`mx-auto max-w-7xl p-4 ${className}`}>{children}</div>
}
