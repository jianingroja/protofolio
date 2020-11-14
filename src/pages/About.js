import styled from "styled-components";
import AboutPhoto from "../images/2.JPG";
import { Image, Page } from "../style/style";

const About = () => {
  return (
    <Page>
      <Image>
        <img src={AboutPhoto} alt="" />
      </Image>

      <AboutDetails>
        <AboutDetail>
          <h2>中文名和英文名</h2>
          <p>王佳宁 - Mica</p>
        </AboutDetail>

        <AboutDetail>
          <h2>生活状态</h2>
          <p>希望在互联网时代过一种有温度的纸质智性生活。</p>
          <p>喜欢以观察和记录为内容的街头摄影；</p>
          <p>坚持长期阅读的习惯，2020年最喜欢的作家是严歌苓；</p>
          <p>从疫情初期开始健身，希望能在2021年做第一个引体向上；</p>
          <p>
            认同的旅行方式是深度穷游，参与当地的文化和生活，为此也对语言学习充满热情，会说一点英语、西班牙语和挪威语；
          </p>
          <p>
            每天在上学的路上喜欢听爵士乐和播客，早上做一杯手冲咖啡，偏爱明亮的风味和浓郁的果酸.
          </p>
        </AboutDetail>
        <AboutDetail>
          <h2>社交账号</h2>
          <a href="https://github.com/jianingroja" target="blank">
            GitHub
          </a>
          <a href="https://www.instagram.com/abitofchina/" target="blank">
            Instagram
          </a>
          <a
            href="https://www.duozhuayu.com/users/146580914036543165/activities"
            target="blank"
          >
            多抓鱼
          </a>
        </AboutDetail>
        {/* <AboutDetail>
          <h2>人生梦想</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </AboutDetail> */}
      </AboutDetails>
    </Page>
  );
};

const AboutDetails = styled.div`
  text-align: left;
  flex: 0.5;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

const AboutDetail = styled.div`
  padding: 1rem 2rem;
  margin-bottom: 3rem;
  h2 {
    padding-bottom: 1rem;
  }
  a {
    text-decoration: none;
    color: #5c5c5c;
    margin-bottom: 0.8rem;
    display: block;
    &:hover {
      color: #7e5858;
      text-decoration: underline;
      text-decoration-color: rosybrown;
      cursor: pointer;
    }
  }
`;

export default About;
