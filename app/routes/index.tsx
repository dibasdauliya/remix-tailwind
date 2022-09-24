import Container from '~/components/container'
import CalculusIIcon from '~/components/icons/calculus-i'
import ExcelIcon from '~/components/icons/excel'

export default function Index() {
  return (
    <>
      <Container className='space-y-20'>
        <header className='flex flex-wrap items-center justify-between'>
          <img src='/logo.svg' alt='' width={150} />
          <nav>
            <ul className='hidden gap-5 lg:flex'>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </nav>
        </header>

        <main className='flex flex-wrap gap-20 py-5 lg:gap-32'>
          <div>
            <div className='max-w-lg'>
              <h1 className='mb-6 text-3xl font-bold leading-[1.18] md:text-4xl lg:text-5xl'>
                Welcome to the Questions Answers Hub
              </h1>
              <p className='text-xl lg:text-2xl'>
                Play quiz, view answers with videos, and be on the top!
              </p>
            </div>

            <div className='mt-12 flex gap-4 text-lg lg:text-xl'>
              <button className='flex items-center gap-3 rounded-md border-[3px] border-brand bg-brand px-5 py-2 text-white lg:px-7'>
                <img src='/icons/search.svg' width={30} alt='' />
                Search
              </button>
              <button className='rounded-md border-[3px] border-brand px-5 py-2 lg:px-7'>
                View Subjects
              </button>
            </div>
          </div>

          <img src='hero-img.png' alt='' width='450' className='self-start' />
        </main>

        <section className='flex flex-wrap gap-8'>
          <div className='w-80 rounded-md bg-light p-5'>
            <img src='/icons/assignment.svg' width={80} alt='' />
            <h3 className='mt-4 mb-2 text-2xl font-semibold'>
              Homework Helper
            </h3>
            <p className='text-lg'>
              Read thousands of questions answers for free. You can search any
              of your questions or ask it if you can't find.
            </p>
          </div>

          <div className='w-80 rounded-md bg-light p-5'>
            <img src='/icons/assignment.svg' width={80} alt='' />
            <h3 className='mt-4 mb-2 text-2xl font-semibold'>
              Homework Helper
            </h3>
            <p className='text-lg'>
              Read thousands of questions answers for free. You can search any
              of your questions or ask it if you can't find.
            </p>
          </div>

          <div className='w-80 rounded-md bg-light p-5'>
            <img src='/icons/assignment.svg' width={80} alt='' />
            <h3 className='mt-4 mb-2 text-2xl font-semibold'>
              Homework Helper
            </h3>
            <p className='text-lg'>
              Read thousands of questions answers for free. You can search any
              of your questions or ask it if you can't find.
            </p>
          </div>
        </section>
      </Container>

      <section className='my-20 bg-light py-10'>
        <Container className='mx-auto max-w-7xl p-4'>
          <h2 className='mb-10 text-3xl font-bold lg:text-4xl'>Subjects</h2>

          <div className='flex flex-wrap gap-8'>
            <div className='w-80 rounded-md bg-white p-5'>
              <ExcelIcon />
              <h3 className='mt-4 mb-2 text-2xl font-semibold'>
                Homework Helper
              </h3>
              <p className='text-lg'>
                Read thousands of questions answers for free. You can search any
                of your questions or ask it if you can't find.
              </p>
            </div>

            <div className='w-80 rounded-md bg-white p-5'>
              {/* <img src='/icons/assignment.svg' width={80} alt='' /
            > */}
              <CalculusIIcon />
              <h3 className='mt-4 mb-2 text-2xl font-semibold'>
                Homework Helper
              </h3>
              <p className='text-lg'>
                Read thousands of questions answers for free. You can search any
                of your questions or ask it if you can't find.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container className='my-20'>
        <section className='relative max-w-6xl overflow-clip rounded-lg bg-secondary p-9 text-white'>
          <div className='grid'>
            <h2 className='mb-4 text-2xl font-bold lg:text-3xl'>
              We Believe in Research
            </h2>
            <p className='z-10 max-w-3xl text-lg leading-8 lg:text-xl'>
              Using search engine is one of the most important skills to
              succeed. We're glad that you are visiting here by not limiting
              your bounds within teachers and boring textbooks. More power to
              you.
            </p>
          </div>

          <img
            src='/decoration.svg'
            alt=''
            width={200}
            className='absolute right-0 bottom-0'
          />
        </section>
      </Container>
    </>
  )
}
