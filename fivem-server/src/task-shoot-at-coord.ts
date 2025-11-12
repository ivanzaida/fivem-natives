import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:TASK_SHOOT_AT_COORD
 *
 * 0x601C22E3

 * 
 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {number} duration
 * @param {number} firingPattern
 */
export function taskShootAtCoord(ped: PedIndex, x: number, y: number, z: number, duration: number, firingPattern: number): void {
	const taskShootAtCoord_result = Citizen.invokeNative<void>('0x601C22E3', ped, x, y, z, duration, firingPattern);
	return taskShootAtCoord_result;
}