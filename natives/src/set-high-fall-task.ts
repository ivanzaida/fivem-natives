import { PedIndex, EHighFallEntryType } from '@ivanzaida/structures'

/**
 * TASK:SET_HIGH_FALL_TASK
 *
 * 0x8A43FAF3B2368B62

 * 
 * Makes the ped ragdoll like when falling from a great height
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} minTime
 * @param {number} maxTime
 * @param {EHighFallEntryType} type
 */
export function setHighFallTask(ped: PedIndex, minTime: number, maxTime: number, type: EHighFallEntryType | number = 0): void {
	const setHighFallTask_result = Citizen.invokeNative<void>('0x8A43FAF3B2368B62', ped, minTime, maxTime, type);
	return setHighFallTask_result;
}