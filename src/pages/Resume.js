import styled from "styled-components";
import Resumelihoto3 from "../images/1.JPG";
import Resumelihoto2 from "../images/3.JPG";
import Resumelihoto1 from "../images/4.jpg";
import { Image, Page, Info } from "../style/style";

const Resume = () => {
  return (
    <Page>
      <Image>
        <img src={Resumelihoto1} alt="" />
        <img src={Resumelihoto2} alt="" />
        <img src={Resumelihoto3} alt="" />
      </Image>
      <Info>
        <div className="resume-detail">
          <InfoDetail>
            <h2>教育经历</h2>
            <div className="education-detail">
              <h3>对外经济贸易大学 2017-2021</h3>
              <ul>
                <li>专业：国际经济与贸易/西班牙语</li>
                <li>荣誉：西班牙语一、二等奖学金(2018-2020)</li>
              </ul>
            </div>
            <div className="education-detail">
              <h3>马德里考米亚斯天主教大学 2019秋季</h3>
              <ul>
                <li>课程：国际商务/西班牙文化历史</li>
                <li>荣誉：国际交流一等奖学金</li>
              </ul>
            </div>
          </InfoDetail>
          <InfoDetail>
            <h2>技能总结</h2>
            <ul>
              <li>系统掌握 HTML / CSS / JavaScript等前端Web开发技术</li>
              <li>对ES6+ / TylieScript / HTTP协议 / RESTful API有良好理解</li>
              <li>熟悉 React 开发框架，理解组件化思维</li>
              <li>
                对 node.js / Express / Mongodb 及 Postman测试工具有一定了解
              </li>
              <li>正在学习 Normalizr、Postcss、Styled-jsx 和 Jest</li>
            </ul>
          </InfoDetail>
          <InfoDetail>
            <h2>与多抓鱼的契合之处</h2>
            <ul>
              <li>认同和喜爱多抓鱼的经营理念，自由而不散漫，乐于沟通</li>
              <li>
                多抓鱼小程序、APP深度用户，熟悉产品结构，关心实际产品和业务
              </li>
              <li>
                自我驱动，学习能力和好奇心在线，有稳定的心态和面对困难的幽默感
              </li>
              <li>能阅读英文资料，利用一手信息解决问题</li>
            </ul>
          </InfoDetail>
          <InfoDetail>
            <h2>其他相关个人总结</h2>
            <ul>
              <li>跨文化交流经验丰富，有海外生活经历，关注国际平台。</li>
              <li>热爱艺术，对西方美术史、当代艺术及画廊持续关注。</li>
              <li>乐于学习，具备良好的沟通能力和团队协作精神</li>
            </ul>
          </InfoDetail>
          <InfoDetail>
            <h2>工作和社会实践经历</h2>
            <div className="exliereience-detail">
              <h3>北京魔力耳朵科技公司——人力资源</h3>
              <ul>
                <li>对候选北美外教进行初步评估，安排面试，跟踪招聘进度;</li>
                <li>
                  依照公司标准对候选外教进行一对一线上培训，完善培训方法。
                </li>
              </ul>
            </div>
            <div className="exliereience-detail">
              <h3>塞尔维亚贝尔格莱德国际青年旅社</h3>
              <ul>
                <li>
                  协助团队管理旅店综合日常事务，汇总人员信息，团队合作策划内部活动。
                </li>
              </ul>
            </div>
            <div className="exliereience-detail">
              <h3>阿尔巴尼亚芙罗拉国际青年旅社</h3>
              <ul>
                <li>
                  协助团队管理旅店综合日常事务，汇总人员信息，团队合作策划内部活动。
                </li>
                <li>承担部分摄影工作，官方新媒体账号运营。</li>
              </ul>
            </div>
            <div className="exliereience-detail">
              <h3>BeHive社交巢——新媒体运营（微信）</h3>
              <ul>
                <li>
                  运营微信公众号，编辑、发布活动信息。协助活动策划、场地管理和活动内容执行。
                </li>
                <li>翻译(中英互译)相关媒体资料。</li>
              </ul>
            </div>
          </InfoDetail>
          <InfoDetail>
            <h2>志愿服务和社团活动</h2>
            <div className="volunteer-detail">
              <h3>对外经济贸易大学附属小学英语角老师</h3>
              <ul>
                <li>每周固定前往小学，为低年级小朋友制定趣味英语教学课程</li>
              </ul>
            </div>
            <div className="volunteer-detail">
              <h3>北京TBC国学中心汉语讲师</h3>
              <ul>
                <li>
                  与校内短期国际交流生进行线下多方位对接，进行针对性对外汉语教学。
                </li>
              </ul>
            </div>
            <div className="volunteer-detail">
              <h3>AIESEC中国大陆区对外经贸分会项目组</h3>
              <ul>
                <li>
                  发布、管理校内志愿者报名信息，协助举办线下宣讲会，面试候选人，进行行前培训。
                </li>
              </ul>
            </div>
          </InfoDetail>
        </div>
      </Info>
    </Page>
  );
};

const InfoDetail = styled.div`
  padding: 1rem 2rem 1rem 0rem;
  margin-bottom: 2rem;
  h2 {
    padding-bottom: 1rem;
  }
  h3 {
    padding: 1rem 0rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: sliace-between;
  li {
    list-style: none;
  }
  @media screen and (max-width: 414px) {
    padding: 0.5rem 0rem;
  }
`;

export default Resume;
