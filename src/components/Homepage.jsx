import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
// import { useGetCryptosQuery } from "../services/_cryptoApi";

const { Title } = Typography;

const Homepage = () => {
  // const { data, isFetching } = useGetCryptosQuery();
  // console.log("data= ", data);
  // const globalStats = data?.data?.stats;
  // if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className='heading'>
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          {/* <Statistic title='Total Cryptocurrencies' value={globalStats.total} /> */}
          <Statistic title='Total Cryptocurrencies' value={5} />
        </Col>
        <Col span={12}>
          {/* <Statistic
            title='Total Exchanges'
            value={millify(globalStats.totalExchanges)}
          /> */}
          <Statistic
            title='Total Exchanges'
            value={millify(5)}
          />
        </Col>
        <Col span={12}>
          {/* <Statistic
            title='Total Market Cap:'
            value={`$${millify(globalStats.totalMarketCap)}`}
          /> */}
          <Statistic
            title='Total Market Cap:'
            value={`$${millify(5)}`}
          />
        </Col>
        <Col span={12}>
          {/* <Statistic
            title='Total 24h Volume'
            value={`$${millify(globalStats.total24hVolume)}`}
          /> */}
          <Statistic
            title='Total 24h Volume'
            value={`$${millify(5656)}`}
          />
        </Col>
        <Col span={12}>
          {/* <Statistic title='Total Cryptocurrencies' value={globalStats.total} /> */}
          <Statistic title='Total Cryptocurrencies' value={45433} />
        </Col>
        <Col span={12}>
          {/* <Statistic
            title='Total Markets'
            value={millify(globalStats.totalMarkets)}
          /> */}
          <Statistic
            title='Total Markets'
            value={millify(122345)}
          />
        </Col>
      </Row>
    </>
  );
};

export default Homepage;
