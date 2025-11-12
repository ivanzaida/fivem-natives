import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_BIG_VEHICLE
 *
 * 0x9E20DC08879FF3FC

 * 
 * Returns true if MF_IS_BIG (strModelFlags 0x8) handling model flag is set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @returns {boolean}  
 */
export function isBigVehicle(vehicle: VehicleIndex): boolean {
	const isBigVehicle_result = Citizen.invokeNative<boolean>('0x9E20DC08879FF3FC', vehicle);
	return isBigVehicle_result;
}