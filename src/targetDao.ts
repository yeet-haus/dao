import { ValidNetwork, VIEM_CHAINS } from '@daohaus/keychain-utils';

export const TARGET_DAO: {
  [key: string]: {
    ADDRESS: string;
    SAFE_ADDRESS: string;
    CHAIN_ID: ValidNetwork;
  };
} = {
  '0x61fcfe0bfadc00a7ae7b3523ae4602ae373e62b9': {
    ADDRESS: '0x61fcfe0bfadc00a7ae7b3523ae4602ae373e62b9',
    SAFE_ADDRESS: '0xad0f9acf55a25592366286f9e7881e87fa91e29e',
    CHAIN_ID: '0xa4b1',
  },
};
