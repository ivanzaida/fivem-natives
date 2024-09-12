/**
 * MONEY:NETWORK_EARN_DAILY_VEHICLE
 *
 * 0xD378B386217DBB5E

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} carHash
 */
export function networkEarnDailyVehicle(amount: number, carHash: number): void {
	const networkEarnDailyVehicle_result = Citizen.invokeNative<void>('0xD378B386217DBB5E', amount, carHash);
	return networkEarnDailyVehicle_result;
}