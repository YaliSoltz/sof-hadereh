import React from "react";
import ArticleProvider from "./article";
import BioProvider from "./bio";
import ConsultationProvider from "./consultation";

const Store = ({ children }) => {
  return (
    <ArticleProvider>
      <BioProvider>
        <ConsultationProvider>
          {children}
        </ConsultationProvider>
      </BioProvider>
    </ArticleProvider>
  );
};

export default Store;
