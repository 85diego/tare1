import foto from '../../images/foto1.jpg'
const cards = () => {
    return (
      <div class="container">
        <div class="row">
            <div class="col-md-4">
            <div class="card">
            <img src={foto} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
            </div>
        </div>
      </div>
    )
}

export default cards
