import Card from './Card'

export const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
            <Card/>
        </div>
        <div className="col-md-4">
            <Card/>
        </div>
        <div className="col-md-4">
            <Card/>
        </div>
      </div>
    </div>
  )
}
