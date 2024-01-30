import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
       
      </Link>
      <ul>
        <CustomLink to="/">Trang chủ</CustomLink>
        <CustomLink to="/intro">Giới thiệu</CustomLink>
        <CustomLink to="/about">Mô hình toán học</CustomLink>
        <CustomLink to="/doc">Tài liệu học tập</CustomLink>
        <CustomLink to="/store">Cửa hàng</CustomLink>
        <CustomLink to="/contact">Liên hệ</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}