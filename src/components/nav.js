export default function Nav() {
    return (
        <ul className="nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Current Forecast</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/goTo">Go To</a>
            </li>
        </ul>
    )
}