import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_BLIP_THROTTLE_RANDOMLY
 *
 * 0x4058D9ECF3B8E2FC

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} newVal
 */
export function setVehicleBlipThrottleRandomly(vehicle: VehicleIndex, newVal: boolean): void {
	const setVehicleBlipThrottleRandomly_result = Citizen.invokeNative<void>('0x4058D9ECF3B8E2FC', vehicle, newVal);
	return setVehicleBlipThrottleRandomly_result;
}