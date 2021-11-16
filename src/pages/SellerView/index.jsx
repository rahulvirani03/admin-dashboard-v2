import React from "react";
import Component from "@components/SellerView";
import { withContext } from "@components/hoc";

function SellerView({ home }) {
  return (
    <>
      <Component home={home} />
    </>
  );
}
export default withContext(SellerView);
