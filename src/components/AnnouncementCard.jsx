const AnnouncementCard = ({ children, style }) => {
  return (
    <section
      className={`bg-blue text-grayish-blue py-4 px-6 rounded-lg shadow-sm ${style}`}
    >
      {children}
    </section>
  )
}

export default AnnouncementCard
