import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_HELI_CONTROL_LAGGING_RATE_SCALAR
 *
 * 0x348B16EB27AA1C60

 * 
 * value between 0.0 and 1.0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} scalar
 */
export function setHeliControlLaggingRateScalar(vehicle: VehicleIndex, scalar: number): void {
	const setHeliControlLaggingRateScalar_result = Citizen.invokeNative<void>('0x348B16EB27AA1C60', vehicle, scalar);
	return setHeliControlLaggingRateScalar_result;
}