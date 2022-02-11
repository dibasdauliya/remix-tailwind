export default function Index() {
  return (
    <div className='grid place-items-center h-screen'>
      <div>
        <h1 className='font-bold text-2xl mb-2'>
          Welcome to Remix + Tailwind CSS
        </h1>
        <ul className='list-disc'>
          <li>
            <a
              target='_blank'
              href='https://remix.run/tutorials/blog'
              rel='noreferrer'
            >
              15m Quickstart Blog Tutorial
            </a>
          </li>
          <li>
            <a
              target='_blank'
              href='https://remix.run/tutorials/jokes'
              rel='noreferrer'
            >
              Deep Dive Jokes App Tutorial
            </a>
          </li>
          <li>
            <a target='_blank' href='https://remix.run/docs' rel='noreferrer'>
              Remix Docs
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
