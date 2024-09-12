import { VehicleIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_HELI_THROTTLE_CONTROL
 *
 * 0X8E86238D

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} heli The helicopter to check.
 * @returns {number}  Returns a value representing the throttle control of the helicopter. The value ranges from `0.0` (no throttle) to `2.0` (full throttle).
 */
export function getHeliThrottleControl(heli: VehicleIndex): number {
	const getHeliThrottleControl_result = Citizen.invokeNative<number>('0X8E86238D', heli);
	return getHeliThrottleControl_result;
}