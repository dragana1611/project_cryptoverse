import React, { useState } from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoExchangesApi";
import Loader from "./Loader";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: exchangesData, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;

  return (
    <>
      <Row gutter={[16, 16]} className='exchange-header-container'>
        <Col span={4}>
          <Title level={5}>Name</Title>
        </Col>
        <Col span={4}>
          <Title level={5}></Title>
        </Col>
        <Col span={4}>
          <Title level={5}>Trade Volume 24h</Title>
        </Col>
        <Col span={4}>
          <Title level={5}>Trust Score</Title>
        </Col>
        <Col span={4}>
          <Title level={5}>Trust Score Rank</Title>
        </Col>
        <Col span={4}>
          <Title level={5}>Year Established</Title>
        </Col>
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
                      ${millify(exchange["trade_volume_24h_btc"])}
                    </Col>
                    <Col span={4}>
                      <Text>{exchange["trust_score"]}</Text>
                    </Col>
                    <Col span={4}>
                      <Text>{exchange["trust_score_rank"]}</Text>
                    </Col>
                    <Col span={4}>
                      <Text>{exchange["year_established"] || "unknown"}</Text>
                    </Col>
                  </Row>
                }
              >
                {HTMLReactParser(
                  exchange.description || "No description available"
                )}
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
