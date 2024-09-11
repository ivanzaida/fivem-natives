import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_AS_ENEMY
 *
 * 0x4BD214FCF7332FF6

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} enemy
 */
export function setPedAsEnemy(ped: PedIndex, enemy: boolean): void {
	const setPedAsEnemy_result = Citizen.invokeNative<void>('0x4BD214FCF7332FF6', ped, enemy);
	return setPedAsEnemy_result;
}