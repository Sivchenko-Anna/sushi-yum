import logoSvg from "../assets/sushi-logo.svg"

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Shushi logo" />
          <div>
            <h1>React Shushi Yum</h1>
            <p>лучшие суши и роллы в этой вселенной</p>
          </div>
        </div>
      </div>
    </div>
  );
}
