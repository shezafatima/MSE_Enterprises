import Image from 'next/image'


function Construction() {
  return (
    <div>
        <h1 className='text-4xl font-bold text-center mt-20'>Page Under Construction</h1>
        <p className='text-center mt-4 text-gray-600'>We are working hard to bring you the best experience. Please check back later.</p>
        <Image  src="/icons/construction.svg" alt="Under Construction" width={400} height={300} className='mx-auto mt-10 px-2' />
    </div>
  )
}

export default Construction