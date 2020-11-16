import styled from "styled-components";
import Resumephoto3 from "../images/1.JPG";
import Resumephoto2 from "../images/3.JPG";
import Resumephoto1 from "../images/4.jpg";
import { Image, Page, Info } from "../style/style";

const Resume = () => {
  return (
    <Page>
      <Image>
        <img src={Resumephoto1} alt="" />
        <img src={Resumephoto2} alt="" />
        <img src={Resumephoto3} alt="" />
      </Image>
      <Info>
        <div className="resume-detail">
          <InfoDetail>
            <h2>教育经历</h2>
            <div className="education-detail">
              <h3>对外经济贸易大学 &emsp; 2017-2021</h3>
              <ul>
                <li>专业：国际经济与贸易/西班牙语</li>
                <li>荣誉：西班牙语一、二等奖学金(2018-2020)</li>
              </ul>
            </div>
            <div className="education-detail">
              <h3>马德里考米亚斯天主教大学 &emsp; 2019/08-2020/01</h3>
              <ul>
                <li>专业：国际商务/西班牙文化历史</li>
                <li>荣誉：国际交流一等奖学金</li>
              </ul>
            </div>
          </InfoDetail>
          <InfoDetail>
            <h2>技能总结</h2>
            <ul>
              <li>系统掌握 HTML / CSS / JavaScript等前端Web开发技术</li>
              <li>对ES6+ / TypeScript / HTTP协议 / RESTful API有良好理解</li>
              <li>
                熟悉 React 开发框架，理解组件化思维，有单页Web应用开发经验
              </li>
              <li>
                对 node.js / Express / Mongodb 及 Postman
                测试工具有一定了解，正在进一步学习
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
              <h3>北京魔力耳朵科技公司——人力资源 &emsp; 2020/03-2020/09</h3>
              <ul>
                <li>
                  负责公司数据库内500+(部分)候选北美外教的初步筛选，配合团队评估，协调安排面试，跟踪招聘进度;
                </li>
                <li>
                  依照公司标准，对超过100名候选人进行一对一线上培训，完善培训方法，促成签约。
                </li>
              </ul>
            </div>
            <div className="exliereience-detail">
              <h3>阿尔巴尼亚夫罗拉国际青年旅社 &emsp; 2019/07-2019/08</h3>
              <ul>
                <li>
                  协助管理旅店综合日常事务，接待来自超过25个国家和地区的人员200+，组织小型出游及室内活动。工作语言:
                  英语。
                </li>
                <li>承担部分摄影工作，官方新媒体账号(Instagram)运营。</li>
              </ul>
            </div>
            <div className="exliereience-detail">
              <h3>塞尔维亚贝尔格莱德国际青年旅社 &emsp; 2019/01-2019/03</h3>
              <ul>
                <li>
                  协助管理旅店综合日常事务，接待来自超过25个国家和地区的人员200+，团队合作策划内部活动。工作语言:
                  英语。
                </li>
              </ul>
            </div>
            <div className="exliereience-detail">
              <h3>BeHive社交巢——新媒体运营（微信）&emsp; 2017/12-2018/12</h3>
              <ul>
                <li>
                  运营微信公众号，编辑、发布活动信息，期间关注数据增加150%，累积阅读量1000+;
                </li>
                <li>
                  参与组织线下小型研讨会活动20+场，累计参加人数500+，同时负责中英媒体材料的翻译。
                </li>
              </ul>
            </div>
          </InfoDetail>
          <InfoDetail>
            <h2>志愿服务和社团活动</h2>
            <div className="volunteer-detail">
              <h3>对外经济贸易大学附属小学英语角老师 &emsp; 2018/01-2019/07</h3>
              <ul>
                <li>每周固定前往小学，为低年级小朋友制定趣味英语教学课程</li>
              </ul>
            </div>
            <div className="volunteer-detail">
              <h3>北京TBC国学中心汉语讲师 &emsp; 2018/01-2019/06</h3>
              <ul>
                <li>
                  与校内短期国际交流生进行线下多方位对接，进行针对性对外汉语教学。
                </li>
              </ul>
            </div>
            <div className="volunteer-detail">
              <h3>AIESEC中国大陆区对外经贸分会项目组 &emsp; 2017/09-2018/01</h3>
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
  justify-content: space-between;
  li {
    /* list-style: square inside rosybrown; */
    list-style: none;
    margin-left: 5px;
    ::before {
      content: "❍ ";
      font-size: 6px;
      color: #999797;
      margin-right: 5px;
    }
  }
  @media screen and (max-width: 414px) {
    padding: 0.5rem 0rem;
  }
`;

export default Resume;
