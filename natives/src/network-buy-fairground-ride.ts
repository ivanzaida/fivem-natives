/**
 * MONEY:NETWORK_BUY_FAIRGROUND_RIDE
 *
 * 0xD8F9465B2186C59F

 * 
 * The first parameter is the amount spent which is store in a global when this native is called. The global returns 10. Which is the price for both rides.
 * 
 * The last 3 parameters are,
 * 2,0,1 in the am_ferriswheel.c
 * 1,0,1 in the am_rollercoaster.c
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} rideId
 * @param {boolean} fromBank
 * @param {boolean} fromBankAndWallet
 * @param {number} npcProvider
 */
export function networkBuyFairgroundRide(amount: number, rideId: number, fromBank: boolean = false, fromBankAndWallet: boolean = false, npcProvider: number = 0): void {
	const networkBuyFairgroundRide_result = Citizen.invokeNative<void>('0xD8F9465B2186C59F', amount, rideId, fromBank, fromBankAndWallet, npcProvider);
	return networkBuyFairgroundRide_result;
}