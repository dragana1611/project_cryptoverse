import React, { useState } from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoExchangesApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: exchangesData, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;
  
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={4}>Name</Col>
        <Col span={4}>Image</Col>
        <Col span={4}>Trade Volume 24h</Col>
        <Col span={4}>Trust Score</Col>
        <Col span={4}>Trust Score Rank</Col>
        <Col span={4}>Year Established</Col>
      </Row>
      <Row gutter={[16, 16]}>
        {exchangesData.map((exchange) => (
          <Col span={24}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={4}>
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={4}>
                      <Avatar
                        className='exchange-image'
                        src={exchange.image}
                        alt={exchange.name}
                      />
                    </Col>
                    <Col span={4}>
                      {millify(exchange["trade_volume_24h_btc"])}
                    </Col>
                    <Col span={4}>
                      <Text>{exchange["trust_score"]}</Text>
                    </Col>
                    <Col span={4}>
                      <Text>{exchange["trust_score_rank"]}</Text>
                    </Col>
                    <Col span={4}>
                      {exchange["year_established"]}
                    </Col>
                  </Row>
                }
              >
                {HTMLReactParser(exchange.description || "No description available")}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
