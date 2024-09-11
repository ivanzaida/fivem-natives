/**
 * MONEY:NETWORK_EARN_BIKER_SHOP
 *
 * 0xFFE3EA612616D334

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} vehicleModel
 */
export function networkEarnBikerShop(amount: number, vehicleModel: number): void {
	const networkEarnBikerShop_result = Citizen.invokeNative<void>('0xFFE3EA612616D334', amount, vehicleModel);
	return networkEarnBikerShop_result;
}