export default function BoardMark({ mark }: Mark) {

  return (
    <h1>{mark}</h1>
  )

}

interface Mark {
  mark: string
}
