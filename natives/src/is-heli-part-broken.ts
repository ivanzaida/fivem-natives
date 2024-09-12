import { VehicleIndex } from '@ivanzaida/structures'

/**
 * VEHICLE:IS_HELI_PART_BROKEN
 *
 * 0x151B89DBEF140C19

 * 
 * ------------------------------------------------------------------
 * @param {VehicleIndex} vehicle
 * @param {boolean} checkMainRotor
 * @param {boolean} checkRearRotor
 * @param {boolean} checkTailBoom
 * @returns {boolean}  
 */
export function isHeliPartBroken(vehicle: VehicleIndex, checkMainRotor: boolean, checkRearRotor: boolean, checkTailBoom: boolean): boolean {
	const isHeliPartBroken_result = Citizen.invokeNative<boolean>('0x151B89DBEF140C19', vehicle, checkMainRotor, checkRearRotor, checkTailBoom);
	return isHeliPartBroken_result;
}