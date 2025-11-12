import { PedIndex } from '@ivanzaida/structures'

/**
 * WEAPON:MAKE_PED_RELOAD
 *
 * 0xEB5B16C858201429

 * 
 * Make a (player) ped reload at the first opportunity and return true, if holding
 * a reloadable weapon that's not full already, or otherwise, return false.
 * The initial version of this command only works for the player, can be extended to AI if needed.
 * 
 * Forces a ped to reload only if they are able to; if they have a full magazine, they will not reload.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @returns {boolean}  
 */
export function makePedReload(ped: PedIndex): boolean {
	const makePedReload_result = Citizen.invokeNative<boolean>('0xEB5B16C858201429', ped);
	return makePedReload_result;
}