import { getNFT } from "../../util/nfts"

export default function nftAPI(req, res) {
  const { edition } = req.query
  const nft = getNFT(edition);
  res.status(200).json(nft)
}
