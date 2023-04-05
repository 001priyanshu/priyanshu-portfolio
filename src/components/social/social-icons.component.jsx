import { Main, CircleOuter, Circle } from "./social-icons.styles";

const SocialIcons = () => {
  return (
    <div>
      <Main>
        <CircleOuter>
          <Circle className="circle1">
            <a
              href="https://github.com/001priyanshu"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
          </Circle>
        </CircleOuter>
        <CircleOuter>
          <Circle className="circle2">
            <a
              href="https://twitter.com/Priyans16841306"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </Circle>
        </CircleOuter>
        <CircleOuter>
          <Circle className="circle3">
            <a
              href="https://www.linkedin.com/in/priyanshu-rajput-550b88156/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </Circle>
        </CircleOuter>
        <CircleOuter>
          <Circle className="circle4">
            <a
              href="https://www.instagram.com/priyanshu__rajput__001/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </Circle>
        </CircleOuter>
      </Main>
    </div>
  );
};

export default SocialIcons;
