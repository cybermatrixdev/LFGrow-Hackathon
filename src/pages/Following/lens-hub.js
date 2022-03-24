import { ethersProvider, getSigner } from './ethers.service';

const LENS_HUB_CONTRACT_ADDRESS = `0xd7B3481De00995046C7850bCe9a5196B7605c367`

// lens contract info can all be found on the deployed
// contract address on polygon.
// not defining here as it will bloat the code example
export const lensHub = new ethers.Contract(
  LENS_HUB_CONTRACT_ADDRESS,
  LENS_HUB_ABI,
  getSigner()
)
