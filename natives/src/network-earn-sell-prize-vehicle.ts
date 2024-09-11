/**
 * MONEY:NETWORK_EARN_SELL_PRIZE_VEHICLE
 *
 * 0xD568567F2142F0D6

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} type
 * @param {number} vehicleHash
 */
export function networkEarnSellPrizeVehicle(amount: number, type: number, vehicleHash: number): void {
	const networkEarnSellPrizeVehicle_result = Citizen.invokeNative<void>('0xD568567F2142F0D6', amount, type, vehicleHash);
	return networkEarnSellPrizeVehicle_result;
}