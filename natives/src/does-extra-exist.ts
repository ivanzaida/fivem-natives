import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:DOES_EXTRA_EXIST
 *
 * 0x579FA5568DE0C2A0

 * 
 * Checks via CVehicleModelInfo
 * 
 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {number} extra
 * @returns {boolean}  
 */
export function doesExtraExist(vehicle: VehicleIndex, extra: number): boolean {
	const doesExtraExist_result = Citizen.invokeNative<boolean>('0x579FA5568DE0C2A0', vehicle, extra);
	return doesExtraExist_result;
}