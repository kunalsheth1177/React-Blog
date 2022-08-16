import "./header.css"

export default function Header() {
    return (
      <div className="header">
        <div className="headerTitles">
            <span className="headerTitlesSm">React & Node</span>
            <span className="headerTitlesLg">Blog</span>
        </div>
        <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
        alt=""
        />
      </div>
    )
  }

