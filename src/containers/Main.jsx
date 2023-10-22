import Description from './Decription'
import AnnouncementCard from '../components/AnnouncementCard'
import Form from './Form'

const Main = () => {
  return (
    <main className="bg-red bg-[url('./assets/images/bg-intro-mobile.png')] w-full min-h-screen flex justify-center text-center py-14 lg:items-center lg:bg-[url('./assets/images/bg-intro-desktop.png')]">
      <section className="w-[95%] max-w-lg flex flex-col gap-8 lg:max-w-6xl lg:flex-row">
        <Description />
        <article className="flex flex-col gap-6 lg:flex-1">
          <AnnouncementCard style="px-16">
            <p>
              <span className="font-semibold text-white">
                Try it free 7 days
              </span>{' '}
              then $20/mo. thereafter
            </p>
          </AnnouncementCard>
          <Form />
        </article>
      </section>
    </main>
  )
}

export default Main
