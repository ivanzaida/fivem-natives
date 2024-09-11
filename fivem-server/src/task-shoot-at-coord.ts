import { PedIndex, EFiringType } from '@ivanzaida/structures'

/**
 * CFX:TASK_SHOOT_AT_COORD
 *
 * 0X601C22E3

 * Firing Pattern Hash Information: https://pastebin.com/Px036isB
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} targetCoorsX
 * @param {number} targetCoorsY
 * @param {number} targetCoorsZ
 * @param {number} duration
 * @param {EFiringType} firingType
 */
export function taskShootAtCoord(ped: PedIndex, targetCoorsX: number, targetCoorsY: number, targetCoorsZ: number, duration: number, firingType: EFiringType | number): void {
	const taskShootAtCoord_result = Citizen.invokeNative<void>('0X601C22E3', ped, targetCoorsX, targetCoorsY, targetCoorsZ, duration, firingType);
	return taskShootAtCoord_result;
}