import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="max-w-screen-md">
      <h3 className="font-semibold text-lg py-6">404 - not found</h3>
      <p>
        This page doesn&apos;t exist :(
      </p>
      <div className='my-4 opacity-80 hover:opacity-100'>
      <Link href="/">Back home</Link>
      </div>
    </div>
  )
}