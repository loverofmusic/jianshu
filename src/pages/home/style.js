import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;

export const HomeLeft = styled.div`
  width: 625px;
  float: left;
  margin-top: 30px;
  margin-left: 15px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow:hidden;
  margin-left: -18px;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  border: 1px solid #dcdcdc;
  font-size: 12px;
  color: #000;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 12px;
  .topic-pic{
    width:32px;
    height: 32px;
    float: left;
    margin-right: 10px;
  }
`;
