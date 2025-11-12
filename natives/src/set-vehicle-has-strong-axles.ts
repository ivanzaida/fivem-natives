import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_HAS_STRONG_AXLES
 *
 * 0x5FE0938FDE9B0958

 * 
 * if true, axles won't bend.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} set
 */
export function setVehicleHasStrongAxles(vehicle: VehicleIndex, set: boolean): void {
	const setVehicleHasStrongAxles_result = Citizen.invokeNative<void>('0x5FE0938FDE9B0958', vehicle, set);
	return setVehicleHasStrongAxles_result;
}