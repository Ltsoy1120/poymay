import { useState, useEffect } from "react"
import { useAppSelector } from "../../store"

const PdfPage = () => {
  const vaucherData = useAppSelector(state => state.fishing.vaucherData)
  const [pdfUrl, setPdfUrl] = useState("")

  useEffect(() => {
    fetch(`https://poymay.kz/api/uploads/report-${vaucherData?.id}.pdf`, {
      headers: {
        Accept: "application/pdf"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.blob()
        } else {
          throw new Error("Network response was not ok")
        }
      })
      .then(blob => {
        let url = URL.createObjectURL(blob)
        console.log("url", url)
        setPdfUrl(url)
      })
  }, [vaucherData?.id])

  useEffect(() => {
    const anchorEl = document.getElementById("pdf")
    if (pdfUrl && anchorEl) {
      anchorEl.click()
    }
  }, [pdfUrl])

  return (
    <div>
      <h1>Ваша путевка отправлена на указанную вами Электронную почту. </h1>
      <br />
      <p>
        Дождитесь автоматического скачивания путевки. Если путевка автоматически
        не скачалась можете скачать ее по ссылке:{" "}
        <a id="pdf" href={pdfUrl} download>
          Скачать путевку
        </a>
      </p>
    </div>
  )
}

export default PdfPage
