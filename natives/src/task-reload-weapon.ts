import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_RELOAD_WEAPON
 *
 * 0x550B03C7904C63CD

 * 
 * The 2nd param (drawWeapon) is not implemented.
 * 
 * -----------------------------------------------------------------------
 * 
 * The only occurrence I found in a R script ("assassin_construction.ysc.c4"):
 * 
 *             if (((v_3 < v_4) && (TASK::GET_SCRIPT_TASK_STATUS(PLAYER::PLAYER_PED_ID(), 0x6a67a5cc) != 1)) && (v_5 > v_3)) {
 *                 TASK::TASK_RELOAD_WEAPON(PLAYER::PLAYER_PED_ID(), 1);
 *             }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} drawWeapon
 */
export function taskReloadWeapon(ped: PedIndex, drawWeapon: boolean): void {
	const taskReloadWeapon_result = Citizen.invokeNative<void>('0x550B03C7904C63CD', ped, drawWeapon);
	return taskReloadWeapon_result;
}