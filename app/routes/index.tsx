export default function Index() {
  return (
    <div className='grid h-screen place-items-center'>
      <div>
        <h1 className='mb-2 text-2xl font-bold text-blue-500'>
          Welcome to Remix + Tailwind CSS
        </h1>
        <ul className='list-disc [&_a]:underline'>
          <li>
            <a
              target='_blank'
              href='https://remix.run/tutorials/blog'
              rel='noreferrer'
              className='custom-class'
            >
              15m Quickstart Blog Tutorial [Custom Class Applied]
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
  );
}
