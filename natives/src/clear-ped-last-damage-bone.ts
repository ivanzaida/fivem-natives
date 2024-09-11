import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:CLEAR_PED_LAST_DAMAGE_BONE
 *
 * 0xCBCBAEEB5BBCA58A

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function clearPedLastDamageBone(ped: PedIndex): void {
	const clearPedLastDamageBone_result = Citizen.invokeNative<void>('0xCBCBAEEB5BBCA58A', ped);
	return clearPedLastDamageBone_result;
}