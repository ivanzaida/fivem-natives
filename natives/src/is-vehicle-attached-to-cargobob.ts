import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_VEHICLE_ATTACHED_TO_CARGOBOB
 *
 * 0x4160C3716329E630

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} cargobob
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isVehicleAttachedToCargobob(cargobob: VehicleIndex, vehicle: VehicleIndex): boolean {
	const isVehicleAttachedToCargobob_result = Citizen.invokeNative<boolean>('0x4160C3716329E630', cargobob, vehicle);
	return isVehicleAttachedToCargobob_result;
}