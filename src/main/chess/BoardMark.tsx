export default function BoardMark({ mark }: Mark) {

  return (
    <div className="mark">{mark}</div>
  )

}

interface Mark {
  mark: string
}
