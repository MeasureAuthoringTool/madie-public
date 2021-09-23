/** @format */

import React from "react";
import tw from "twin.macro";
import GlobalStyles from "./styles/GlobalStyles";

const OutterBox = tw.div`bg-white shadow overflow-hidden sm:rounded-lg`;
const InnerBox = tw.div`px-4 py-5 sm:px-6`;
const HeadingThree = tw.h3`text-lg leading-6 font-medium text-gray-900`;
const InfoTable = tw.div`border-t border-gray-200`;
const DescRowGray = tw.div`bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`;
const DescRowWhite = tw.div`bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6`;

const DescTerm = tw.dt`text-sm font-medium text-gray-500`;
const DescName = tw.dd`mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2`;

export default function Root(props) {
  return (
    <>
      <GlobalStyles />
      <OutterBox>
        <InnerBox>
          <HeadingThree>Release Notes</HeadingThree>
        </InnerBox>
        <InfoTable>
          <dl>
            <DescRowWhite>
              <DescTerm>Version 2.0</DescTerm>
              <DescName>Publish to NPM</DescName>
            </DescRowWhite>
            <DescRowGray>
              <DescTerm>Version 0.1.1</DescTerm>
              <DescName>Added Release Notes</DescName>
            </DescRowGray>
            <DescRowWhite>
              <DescTerm>Version 0.1</DescTerm>
              <DescName>Initial prototype of public facing site</DescName>
            </DescRowWhite>
          </dl>
        </InfoTable>
      </OutterBox>
    </>
  );
}
