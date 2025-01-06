import { Button, Container, Stack } from "@mui/material";
import OtherOrders from "../../components/header/otherOrder";
import Tabs from "@mui/material/Tabs";
import React, { useEffect, useState } from "react";
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
import { Order, OrderInQuiry, UpdateOrder } from "../../../lib/types/order";
import { setFinishOrders, setPausedOrders, setProcessOrders } from "./slice";
import {
  retrieveFinishOrders,
  retrievePausedOrders,
  retrieveProcessOrders,
} from "./selector";
import OrderService from "../../services/OrderService";
import { OrderStatus } from "../../../lib/enums/order.enum";
import { serverApi } from "../../../lib/config";
import { sweetTopSmallSuccessAlert } from "../../../lib/sweetAlert";

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
  const [pausedInput, setPausedInput] = useState<OrderInQuiry>({
    page: page,
    limit: 4,
    orderStatus: OrderStatus.PAUSE,
  });
  const [processInput, setProcessInput] = useState<OrderInQuiry>({
    page: page,
    limit: 4,
    orderStatus: OrderStatus.PROCESS,
  });
  const [finishInput, setFinishInput] = useState<OrderInQuiry>({
    page: page,
    limit: 4,
    orderStatus: OrderStatus.FINISH,
  });

  const [updateOrder, setUpdateOrder] = useState<UpdateOrder>({
    orderId: "",
    orderStatus: OrderStatus.PAUSE,
  });

  const [orderUp, setOrderUp] = useState<boolean>(true);

  useEffect(() => {
    setPage(1);
  }, [value]);

  useEffect(() => {
    const orderService = new OrderService();
    orderService
      .getAllOrders(pausedInput)
      .then((data) => {
        setPausedOrders(data);
      })
      .catch((err) => console.log(err));

    orderService
      .getAllOrders(processInput)
      .then((data) => {
        setProcessOrders(data);
      })
      .catch((err) => console.log(err));

    orderService
      .getAllOrders(finishInput)
      .then((data) => {
        setFinishOrders(data);
      })
      .catch((err) => console.log(err));
  }, [pausedInput, processInput, finishInput, orderUp]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handlePagePause = (input: number) => {
    pausedInput.page = input;
    setPausedInput({ ...pausedInput });
  };

  const handlePageProcess = (input: number) => {
    processInput.page = input;
    setPausedInput({ ...processInput });
  };

  const handlePageFinish = (input: number) => {
    finishInput.page = input;
    setPausedInput({ ...finishInput });
  };

  const handleFinish = async (id: string) => {
    updateOrder.orderId = id;
    updateOrder.orderStatus = OrderStatus.FINISH;
    await setUpdateOrder({ ...updateOrder });
  };

  const handleProcess = (id: string) => {
    updateOrder.orderId = id;
    updateOrder.orderStatus = OrderStatus.PROCESS;
    setUpdateOrder({ ...updateOrder });
    setOrderUp(!orderUp);
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
                {pausedOrders.length === 0 ? (
                  <Stack className="no-order">You is not orders</Stack>
                ) : (
                  <Stack className="yes-order">
                    {pausedOrders.map((order) => {
                      return (
                        <Stack className="order-one" key={order._id}>
                          <Stack className="boxes">
                            {order.orderItemData.map((orderItem: any) => {
                              const imagePath = `${serverApi}/${orderItem.productData.productImages[0]}`;
                              return (
                                <Stack className="item" key={orderItem._id}>
                                  <Stack className="image">
                                    <img src={imagePath} alt="" />
                                    <p className="super-text">
                                      {orderItem.productData.productName}
                                    </p>
                                  </Stack>
                                  <Stack className="text">
                                    <span className="no-text">
                                      ${orderItem.productData.productPrice}.00
                                    </span>
                                    <span className="no-text">x</span>
                                    <span className="no-text">
                                      {orderItem.itemQuantity}
                                    </span>
                                    <span className="no-text">=</span>
                                    <span className="no-text">
                                      $
                                      {orderItem.productData.productPrice *
                                        orderItem.itemQuantity}
                                      .00
                                    </span>
                                  </Stack>
                                </Stack>
                              );
                            })}
                          </Stack>
                          <Stack className="total">
                            <Stack className="total-text">
                              <span>Product price</span>
                              <span>
                                ${order.orderTotal - order.orderDelivery}.00
                              </span>
                              <span>+</span>
                              <span>Delivery cost</span>
                              <span>${order.orderDelivery}.00</span>
                              <span>=</span>
                              <span>Total</span>
                              <span>{order.orderTotal}</span>
                            </Stack>
                            <Stack className="buttons">
                              <Button className="btn1">Cancel</Button>
                              <Button
                                className="btn2"
                                onClick={() => handleProcess(order._id)}
                              >
                                Process
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
                      onClick={() => handlePagePause(num)}
                    >
                      {num}
                    </Button>
                  );
                })}
              </Stack>
            </TabPanel>
            <TabPanel value="2" className="order-box">
              <Stack className="orders">
                {processOrders.length === 0 ? (
                  <Stack className="no-order">You is not orders</Stack>
                ) : (
                  <Stack className="yes-order">
                    {processOrders.map((order) => {
                      return (
                        <Stack className="order-one" key={order._id}>
                          <Stack className="boxes">
                            {order.orderItemData.map((orderItem: any) => {
                              const imagePath = `${serverApi}/${orderItem.productData.productImages[0]}`;
                              return (
                                <Stack className="item" key={orderItem._id}>
                                  <Stack className="image">
                                    <img src={imagePath} alt="" />
                                    <p className="super-text">
                                      {orderItem.productData.productName}
                                    </p>
                                  </Stack>
                                  <Stack className="text">
                                    <span className="no-text">
                                      ${orderItem.productData.productPrice}.00
                                    </span>
                                    <span className="no-text">x</span>
                                    <span className="no-text">
                                      {orderItem.itemQuantity}
                                    </span>
                                    <span className="no-text">=</span>
                                    <span className="no-text">
                                      $
                                      {orderItem.productData.productPrice *
                                        orderItem.itemQuantity}
                                      .00
                                    </span>
                                  </Stack>
                                </Stack>
                              );
                            })}
                          </Stack>
                          <Stack className="total">
                            <Stack className="total-text">
                              <span>Product price</span>
                              <span>
                                ${order.orderTotal - order.orderDelivery}.00
                              </span>
                              <span>+</span>
                              <span>Delivery cost</span>
                              <span>${order.orderDelivery}.00</span>
                              <span>=</span>
                              <span>Total</span>
                              <span>{order.orderTotal}</span>
                            </Stack>
                            <Stack className="buttons">
                              <Button
                                className="btn2"
                                sx={{ marginLeft: "250px" }}
                                onClick={() => handleFinish(order._id)}
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
                      onClick={() => handlePageProcess(num)}
                    >
                      {num}
                    </Button>
                  );
                })}
              </Stack>
            </TabPanel>
            <TabPanel value="3" className="order-box">
              <Stack className="orders">
                {finishOrders.length === 0 ? (
                  <Stack className="no-order">You is not orders</Stack>
                ) : (
                  <Stack className="yes-order">
                    {finishOrders.map((order) => {
                      return (
                        <Stack className="order-one" key={order._id}>
                          <Stack className="boxes">
                            {order.orderItemData.map((orderItem: any) => {
                              const imagePath = `${serverApi}/${orderItem.productData.productImages[0]}`;
                              return (
                                <Stack className="item" key={orderItem._id}>
                                  <Stack className="image">
                                    <img src={imagePath} alt="" />
                                    <p className="super-text">
                                      {orderItem.productData.productName}
                                    </p>
                                  </Stack>
                                  <Stack className="text">
                                    <span className="no-text">
                                      ${orderItem.productData.productPrice}.00
                                    </span>
                                    <span className="no-text">x</span>
                                    <span className="no-text">
                                      {orderItem.itemQuantity}
                                    </span>
                                    <span className="no-text">=</span>
                                    <span className="no-text">
                                      $
                                      {orderItem.productData.productPrice *
                                        orderItem.itemQuantity}
                                      .00
                                    </span>
                                  </Stack>
                                </Stack>
                              );
                            })}
                          </Stack>
                          <Stack className="total">
                            <Stack className="total-text" marginLeft={"350px"}>
                              <span>Product price</span>
                              <span>
                                ${order.orderTotal - order.orderDelivery}.00
                              </span>
                              <span>+</span>
                              <span>Delivery cost</span>
                              <span>${order.orderDelivery}.00</span>
                              <span>=</span>
                              <span>Total</span>
                              <span>{order.orderTotal}</span>
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
                      onClick={() => handlePageFinish(num)}
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
