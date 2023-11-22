interface TitlePageProps {
  title: string
  subTitle?: string
}

const TitlePage = ({ title, subTitle }: TitlePageProps) => {
  return (
    <div className="title-page">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default TitlePage
