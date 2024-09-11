import { VehicleIndex } from '@ivanzaida/structures'

/**
 * AUDIO:GET_VEHICLE_DEFAULT_HORN_IGNORE_MODS
 *
 * 0x46B7259FABD90750

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {number}  
 */
export function getVehicleDefaultHornIgnoreMods(vehicle: VehicleIndex): number {
	const getVehicleDefaultHornIgnoreMods_result = Citizen.invokeNative<number>('0x46B7259FABD90750', vehicle);
	return getVehicleDefaultHornIgnoreMods_result;
}