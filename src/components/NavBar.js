export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark navbar-news">
      <div className="container">
        <a className="navbar-brand" href="#">
          WWN
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#" aria-current="page">
                Politics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Entertainment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Weather
              </a>
            </li>
          </ul>
          <form class="d-flex ms-4" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-primary border-white text-white"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
