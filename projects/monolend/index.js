const { staking } = require("../helper/staking");
const { pool2 } = require("../helper/pool2");
const { aaveExports } = require("../helper/aave");

MLD = "0x5d089336f95e649e491c054279d64a86565e8b25";
stakingContract = "0x1b136Aad7bacba8dB38779d3b21E5127c1211a3C";

MLD_LP = "0xba96d902bA8321e43f55c7C7E581994fb2aDF6C0";
stakingContractPool2 = "0xcA311537aE1C1A31593c04c838fa10b21304b582";

module.exports = {
  polygon: {
    ...aaveExports("polygon", "0x49Ce0308F3F55955D224453aECe7610b6983c123"),
    staking: staking(stakingContract, MLD, "polygon"),
    pool2: pool2(stakingContractPool2, MLD_LP, "polygon"),
  },
};
