/* eslint-disable react/display-name */
import Link, { LinkProps } from 'next/link'
import React from 'react'
import { twMerge } from "tailwind-merge"

type CommonProps = {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost'
  size?: 'sm' | 'default' | 'md' | 'lg' | 'xl'
  as?: 'button' | 'a'
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & CommonProps
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps &
  CommonProps

type Props = ButtonProps | AnchorProps

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  Props
>(
  (
    {
      as = 'button',
      variant = 'primary',
      size = 'default',
      className,
      ...props
    },
    ref,
  ) => {
    const variants = {
      primary:
        'text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300',
      secondary:
        'text-gray-700 border hover:border-indigo-600 disabled:border-indigo-300 disabled:text-gray-300',
      danger: 'text-white bg-red-600 hover:bg-red-700 disabled:bg-red-300',
      ghost: 'text-indigo-600 hover:bg-indigo-100 disabled:bg-indigo-100',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      default: 'px-4 py-2',
      md: 'px-5 py-3',
      lg: 'px-6 py-3.5',
      xl: 'px-7 py-4',
    }

    if (as === 'a') {
      return (
        <Link
          className={twMerge(variants[variant], sizes[size], 'duration-150 rounded-lg active:shadow-lg disabled:cursor-not-allowed inline-flex items-center', className)}
          {...(props as AnchorProps)}
          ref={ref as React.Ref<HTMLAnchorElement>}
        />
      )
    }

    return (
      <button
        className={`${variants[variant]} ${
          sizes[size]
        } duration-150 rounded-lg active:shadow-lg disabled:cursor-not-allowed inline-flex items-center ${
          className ?? ''
        }`}
        {...(props as ButtonProps)}
        ref={ref as React.Ref<HTMLButtonElement>}
      />
    )
  },
)

