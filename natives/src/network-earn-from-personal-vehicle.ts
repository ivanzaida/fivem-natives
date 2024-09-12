import { ESellingVehicleType } from '@ivanzaida/structures'

/**
 * MONEY:NETWORK_EARN_FROM_PERSONAL_VEHICLE
 *
 * 0xD374BF034B7E27F3

 * 
 * ------------------------------------------------------------------
 * @param {number} amount
 * @param {number} itemhash
 * @param {number} oldLevel
 * @param {number} newLevel
 * @param {boolean} isOffender1
 * @param {boolean} isOffender2
 * @param {ESellingVehicleType} vehicleType
 * @param {number} oldThresholdLevel
 * @param {number} newThresholdLevel
 */
export function networkEarnFromPersonalVehicle(amount: number, itemhash: number, oldLevel: number = 0, newLevel: number = 0, isOffender1: boolean = false, isOffender2: boolean = false, vehicleType: ESellingVehicleType | number = 1, oldThresholdLevel: number = 0, newThresholdLevel: number = 0): void {
	const networkEarnFromPersonalVehicle_result = Citizen.invokeNative<void>('0xD374BF034B7E27F3', amount, itemhash, oldLevel, newLevel, isOffender1, isOffender2, vehicleType, oldThresholdLevel, newThresholdLevel);
	return networkEarnFromPersonalVehicle_result;
}