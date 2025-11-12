import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_RAPPEL_FROM_HELI
 *
 * 0xC52B4FFE6114ED5E

 * 
 * Tells a ped to rappel our of a helicopter. This will verify that they are in fact in a helicopter passenger seat before
 * giving the ped the task
 * 
 * minHeightAboveGround: the minimum height above ground the heli must be at before the ped can start rappelling
 * 
 * Only appears twice in the scripts.
 * 
 * TASK::TASK_RAPPEL_FROM_HELI(PLAYER::PLAYER_PED_ID(), 10.0f);
 * TASK::TASK_RAPPEL_FROM_HELI(a_0, 10.0f);
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} minRappelHeight
 */
export function taskRappelFromHeli(ped: PedIndex, minRappelHeight: number = 10): void {
	const taskRappelFromHeli_result = Citizen.invokeNative<void>('0xC52B4FFE6114ED5E', ped, minRappelHeight);
	return taskRappelFromHeli_result;
}