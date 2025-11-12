import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_SPRAYABLE
 *
 * 0xE61689C28FFE2DAF

 * 
 * Returns false if the vehicle has the FLAG_NO_RESPRAY flag set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleSprayable(vehicle: VehicleIndex): boolean {
	const isVehicleSprayable_result = Citizen.invokeNative<boolean>('0xE61689C28FFE2DAF', vehicle);
	return isVehicleSprayable_result;
}