import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:IS_PED_OPENING_DOOR
 *
 * 0xB16071F8F0F2A561

 * 
 * Returns true if the ped is currently opening a door (CTaskOpenDoor).
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function isPedOpeningDoor(ped: PedIndex): boolean {
	const isPedOpeningDoor_result = Citizen.invokeNative<boolean>('0xB16071F8F0F2A561', ped);
	return isPedOpeningDoor_result;
}