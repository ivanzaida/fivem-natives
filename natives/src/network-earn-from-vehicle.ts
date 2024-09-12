/**
 * MONEY:NETWORK_EARN_FROM_VEHICLE
 *
 * 0x0C547D1E965980C5

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} itemhash
 * @param {number} oldLevel
 * @param {number} newLevel
 * @param {boolean} isOffender1
 * @param {boolean} isOffender2
 * @param {number} oldThresholdLevel
 * @param {number} newThresholdLevel
 */
export function networkEarnFromVehicle(amount: number, itemhash: number, oldLevel: number = 0, newLevel: number = 0, isOffender1: boolean = false, isOffender2: boolean = false, oldThresholdLevel: number = 0, newThresholdLevel: number = 0): void {
	const networkEarnFromVehicle_result = Citizen.invokeNative<void>('0x0C547D1E965980C5', amount, itemhash, oldLevel, newLevel, isOffender1, isOffender2, oldThresholdLevel, newThresholdLevel);
	return networkEarnFromVehicle_result;
}