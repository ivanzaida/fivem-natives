import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_NAME_DEBUG
 *
 * 0xEB418CA245FFE897

 * 
 * NOTE: Debugging functions are not present in the retail version of the game.
 * 
 * untested but char name could also be a hash for a localized string
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {string} debugName
 */
export function setPedNameDebug(ped: PedIndex, debugName: string): void {
	const setPedNameDebug_result = Citizen.invokeNative<void>('0xEB418CA245FFE897', ped, debugName);
	return setPedNameDebug_result;
}