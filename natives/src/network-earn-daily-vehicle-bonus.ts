/**
 * MONEY:NETWORK_EARN_DAILY_VEHICLE_BONUS
 *
 * 0x0C9F128BF7D93196

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 */
export function networkEarnDailyVehicleBonus(amount: number): void {
	const networkEarnDailyVehicleBonus_result = Citizen.invokeNative<void>('0x0C9F128BF7D93196', amount);
	return networkEarnDailyVehicleBonus_result;
}