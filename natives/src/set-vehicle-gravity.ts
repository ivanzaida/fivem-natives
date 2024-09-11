import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:SET_VEHICLE_GRAVITY
 *
 * 0x666DF5A2D9B9C2DF

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} enableGravity
 */
export function setVehicleGravity(vehicle: VehicleIndex, enableGravity: boolean): void {
	const setVehicleGravity_result = Citizen.invokeNative<void>('0x666DF5A2D9B9C2DF', vehicle, enableGravity);
	return setVehicleGravity_result;
}