import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_SWAP_WEAPON
 *
 * 0x71A3A3C67C692798

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {boolean} drawWeapon
 */
export function taskSwapWeapon(ped: PedIndex, drawWeapon: boolean): void {
	const taskSwapWeapon_result = Citizen.invokeNative<void>('0x71A3A3C67C692798', ped, drawWeapon);
	return taskSwapWeapon_result;
}