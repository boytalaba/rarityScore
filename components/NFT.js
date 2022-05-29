import React from "react";
import { formatIpfsUrl } from "../util";
import { config } from "../config";

export const NFT = (nft) => {
  return (
    <>
      <a
        className="text-left w-24
        cursor-pointer rounded-md shadow-xs
        mr-3 mb-3 sm:mr-4 hover:underline text-center"
        href={`/token/${config.STARTING_INDEX == 3 ? nft.edition + 1 : nft.edition}`}
      >
        <img
          src={formatIpfsUrl(nft.image)}
          className="rounded-md h-auto bg-black"
        />
        <div className="rounded-b-md py-2 px-2">
          <h3 className="text-xs text-gray-600">
            #{config.STARTING_INDEX == 1 ? nft.edition + 1 : nft.edition}
          </h3>
        </div>
      </a>
    </>
  );
};
