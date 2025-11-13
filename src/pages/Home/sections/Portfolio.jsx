export default function Portfolio() {
    return (<>
        <div className="row">
            <div className="col-4">
                hola mongo
            </div>
            <div className="col-8">
                <div className="image-scroll-container row flex-nowrap overflow-auto">
                    <div className="col-8 col-md-4"><img src={process.env.PUBLIC_URL + '/images/home/work1-1.png'} className="img-fluid" /></div>
                    <div className="col-8 col-md-4"><img src={process.env.PUBLIC_URL + '/images/home/work1-2.png'} className="img-fluid" /></div>
                    <div className="col-8 col-md-4"><img src={process.env.PUBLIC_URL + '/images/home/work1-3.png'} className="img-fluid" /></div>
                </div>
            </div>
        </div>

    </>)
}