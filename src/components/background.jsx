import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import backgroundImg from '../embedded/background.webp'

export default function Background() {
    return (
        <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
                <Card style={{ width: "100vw", minHeight: "428px", backgroundColor: "#DEEED6" }} className="text-black">
                    <div style={{ top: "auto", width: "578px", marginLeft: "100px", marginTop: "75px"}}>
                        <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control size="lg" type="text" placeholder="   Enter your address                                         ->" />
                            </Form.Group>
                        </Form>
                    </div>
                </Card>
            </div>
            <div >
                <img style={{ height: "428px", width: "20%", position: "absolute", backgroundSize: "cover", backgroundRepeat: "no-repeat", zIndex: '-1'}} src={backgroundImg} alt="background" />
            </div>

        </div>
    )
}