export function classMerge(
  ...classNames: Array<string | null | undefined>
): string {
  const space = " "
  return classNames.filter(Boolean).join(space)
}

export function getFormattedDate(date: Date): string {
  const year = date.getFullYear()
  // Месяц начинается с 0, поэтому добавляем 1, чтобы получить фактический месяц
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  // Формируем строку в формате "гггг-мм-дд"
  const formattedDate = `${year}-${month}-${day}`

  return formattedDate
}
