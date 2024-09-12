import { PedIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLANT_BOMB
 *
 * 0x0A15E9E221AF6CC4

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} targetPositionX
 * @param {number} targetPositionY
 * @param {number} targetPositionZ
 * @param {number} targetHeading
 */
export function taskPlantBomb(ped: PedIndex, targetPositionX: number, targetPositionY: number, targetPositionZ: number, targetHeading: number): void {
	const taskPlantBomb_result = Citizen.invokeNative<void>('0x0A15E9E221AF6CC4', ped, targetPositionX, targetPositionY, targetPositionZ, targetHeading);
	return taskPlantBomb_result;
}