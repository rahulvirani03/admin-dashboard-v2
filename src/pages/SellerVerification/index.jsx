import React from "react";
import Component from "@components/SellerVerification";
import { withContext } from "@components/hoc";

function SellerVerification({ home }) {
  return (
    <>
      <Component home={home} />
    </>
  );
}
export default withContext(SellerVerification);
