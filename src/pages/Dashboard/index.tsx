import { Col, Row } from "react-bootstrap"

function Content() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Test</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Test</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
function Footer() {
    return (
        <>
        </>
    )
}
function MenuSide() {
    return (
        <div>
            <ul>
                <li>
                    FOTO
                </li>
                <li>
                    Principal
                </li>
                <li>
                    Menu
                </li>
            </ul>
        </div>
    )
}
function Dashboard() {
    return (
        <>
            <Row>
                <Col sm={2}>
                    <MenuSide />
                </Col>
                <Col sm={9}>
                    <Content />
                </Col>
            </Row>
        </>
    )
}

export default Dashboard