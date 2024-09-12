import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:SET_PED_PATH_AVOID_FIRE
 *
 * 0x5514EB508DD5A132

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} avoid
 */
export function setPedPathAvoidFire(ped: PedIndex, avoid: boolean): void {
	const setPedPathAvoidFire_result = Citizen.invokeNative<void>('0x5514EB508DD5A132', ped, avoid);
	return setPedPathAvoidFire_result;
}