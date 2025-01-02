import { Button, Container, Stack } from "@mui/material";
import OtherOrders from "../../components/header/otherOrder";
import Tabs from "@mui/material/Tabs";
import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createSelector } from "reselect";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import "../../../css/orders.css";
import { Order } from "../../../lib/types/order";
import { setFinishOrders, setPausedOrders, setProcessOrders } from "./slice";
import {
  retrieveFinishOrders,
  retrievePausedOrders,
  retrieveProcessOrders,
} from "./selector";

const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishOrders: (data: Order[]) => dispatch(setFinishOrders(data)),
});

const pausedOrdersRetrieve = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);

const processOrdersRetrieve = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders,
  })
);

const finishOrdersRetrieve = createSelector(
  retrieveFinishOrders,
  (finishOrders) => ({
    finishOrders,
  })
);

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishOrders } = actionDispatch(
    useDispatch()
  );
  const { pausedOrders } = useSelector(pausedOrdersRetrieve);
  const { processOrders } = useSelector(processOrdersRetrieve);
  const { finishOrders } = useSelector(finishOrdersRetrieve);
  const [value, setValue] = React.useState("1");
  const [page, setPage] = React.useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [value]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handlePage = (input: number) => {
    setPage(input);
  };

  const getOrders = [
    [1, 2, 3, 4, 5],
    [1, 2],
  ];
  return (
    <div className="orders-page">
      <OtherOrders />
      <Container className="container">
        <Box className={"context"}>
          <TabContext value={value}>
            <Stack className="tab-panel">
              <TabList onChange={handleChange} className="aria-label">
                <Tab label="PAUSED ORDERS" value="1" className="tab-text" />
                <Tab label="PROCESS ORDERS" value="2" className="tab-text" />
                <Tab label="FINISH ORDERS" value="3" className="tab-text" />
              </TabList>
            </Stack>
            <TabPanel value="1" className="order-box">
              <Stack className="orders">
                {getOrders.length === 0 ? (
                  <Stack className="no-order">You is not orders</Stack>
                ) : (
                  <Stack className="yes-order">
                    {getOrders.map((order, index) => {
                      return (
                        <Stack className="order-one">
                          <Stack className="boxes">
                            {order.map((orderItem, index) => {
                              return (
                                <Stack className="item">
                                  <Stack className="image">
                                    <img src="/img/baby.jpg" alt="" />
                                    <p className="super-text">Product Name</p>
                                  </Stack>
                                  <Stack className="text">
                                    <span className="no-text">$44.00</span>
                                    <span className="no-text">x</span>
                                    <span className="no-text">2</span>
                                    <span className="no-text">=</span>
                                    <span className="no-text">$88.00</span>
                                  </Stack>
                                </Stack>
                              );
                            })}
                          </Stack>
                          <Stack className="total">
                            <Stack className="total-text">
                              <span>Product price</span>
                              <span>{"$44.00"}</span>
                              <span>+</span>
                              <span>Delivery cost</span>
                              <span>{"$00.00"}</span>
                              <span>=</span>
                              <span>Total</span>
                              <span>{"$44.00"}</span>
                            </Stack>
                            <Stack className="buttons">
                              <Button className="btn1">Cancel</Button>
                              <Button className="btn2">Process</Button>
                            </Stack>
                          </Stack>
                        </Stack>
                      );
                    })}
                  </Stack>
                )}
              </Stack>
              <Stack className="pagination">
                {[1, 2, 3, 4, 5, 6, 7].map((num, index) => {
                  return (
                    <Button
                      className="page"
                      key={index}
                      onClick={() => handlePage(num)}
                    >
                      {num}
                    </Button>
                  );
                })}
              </Stack>
            </TabPanel>
            <TabPanel value="2" className="order-box">
              <Stack className="orders">
                {getOrders.length === 0 ? (
                  <Stack className="no-order">You is not orders</Stack>
                ) : (
                  <Stack className="yes-order">
                    {getOrders.map((order, index) => {
                      return (
                        <Stack className="order-one">
                          <Stack className="boxes">
                            {order.map((orderItem, index) => {
                              return (
                                <Stack className="item">
                                  <Stack className="image">
                                    <img src="/img/baby.jpg" alt="" />
                                    <p className="super-text">Product Name</p>
                                  </Stack>
                                  <Stack className="text">
                                    <span className="no-text">$44.00</span>
                                    <span className="no-text">x</span>
                                    <span className="no-text">2</span>
                                    <span className="no-text">=</span>
                                    <span className="no-text">$88.00</span>
                                  </Stack>
                                </Stack>
                              );
                            })}
                          </Stack>
                          <Stack className="total">
                            <Stack className="total-text">
                              <span>Product price</span>
                              <span>{"$44.00"}</span>
                              <span>+</span>
                              <span>Delivery cost</span>
                              <span>{"$00.00"}</span>
                              <span>=</span>
                              <span>Total</span>
                              <span>{"$44.00"}</span>
                            </Stack>
                            <Stack className="buttons">
                              <Button
                                className="btn2"
                                sx={{ marginLeft: "250px" }}
                              >
                                Finish
                              </Button>
                            </Stack>
                          </Stack>
                        </Stack>
                      );
                    })}
                  </Stack>
                )}
              </Stack>
              <Stack className="pagination">
                {[1, 2, 3, 4, 5, 6, 7].map((num, index) => {
                  return (
                    <Button
                      className="page"
                      key={index}
                      onClick={() => handlePage(num)}
                    >
                      {num}
                    </Button>
                  );
                })}
              </Stack>
            </TabPanel>
            <TabPanel value="3" className="order-box">
              <Stack className="orders">
                {getOrders.length === 0 ? (
                  <Stack className="no-order">You is not orders</Stack>
                ) : (
                  <Stack className="yes-order">
                    {getOrders.map((order, index) => {
                      return (
                        <Stack className="order-one">
                          <Stack className="boxes">
                            {order.map((orderItem, index) => {
                              return (
                                <Stack className="item">
                                  <Stack className="image">
                                    <img src="/img/baby.jpg" alt="" />
                                    <p className="super-text">Product Name</p>
                                  </Stack>
                                  <Stack className="text">
                                    <span className="no-text">$44.00</span>
                                    <span className="no-text">x</span>
                                    <span className="no-text">2</span>
                                    <span className="no-text">=</span>
                                    <span className="no-text">$88.00</span>
                                  </Stack>
                                </Stack>
                              );
                            })}
                          </Stack>
                          <Stack className="total">
                            <Stack className="total-text" marginLeft={"350px"}>
                              <span>Product price</span>
                              <span>{"$44.00"}</span>
                              <span>+</span>
                              <span>Delivery cost</span>
                              <span>{"$00.00"}</span>
                              <span>=</span>
                              <span>Total</span>
                              <span>{"$44.00"}</span>
                            </Stack>
                          </Stack>
                        </Stack>
                      );
                    })}
                  </Stack>
                )}
              </Stack>
              <Stack className="pagination">
                {[1, 2, 3, 4, 5, 6, 7].map((num, index) => {
                  return (
                    <Button
                      className="page"
                      key={index}
                      onClick={() => handlePage(num)}
                    >
                      {num}
                    </Button>
                  );
                })}
              </Stack>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </div>
  );
}
