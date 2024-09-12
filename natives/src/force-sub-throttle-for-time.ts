import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:FORCE_SUB_THROTTLE_FOR_TIME
 *
 * 0x241E64B7BFB90488

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} throttle
 * @param {number} seconds
 */
export function forceSubThrottleForTime(vehicle: VehicleIndex, throttle: number, seconds: number): void {
	const forceSubThrottleForTime_result = Citizen.invokeNative<void>('0x241E64B7BFB90488', vehicle, throttle, seconds);
	return forceSubThrottleForTime_result;
}