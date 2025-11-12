import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_CAN_ENGINE_MISSFIRE
 *
 * 0x76A218B79DCF8962

 * 
 * Sets whether a vehicles engine can missfire
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} val
 */
export function setVehicleCanEngineMissfire(vehicle: VehicleIndex, val: boolean): void {
	const setVehicleCanEngineMissfire_result = Citizen.invokeNative<void>('0x76A218B79DCF8962', vehicle, val);
	return setVehicleCanEngineMissfire_result;
}