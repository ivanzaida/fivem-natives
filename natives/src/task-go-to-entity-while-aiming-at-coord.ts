import { PedIndex, EntityIndex, EFiringType } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_TO_ENTITY_WHILE_AIMING_AT_COORD
 *
 * 0x2868A36BD27FD939

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} goToEntity
 * @param {number} aimAtCoordX
 * @param {number} aimAtCoordY
 * @param {number} aimAtCoordZ
 * @param {number} moveBlendRatio
 * @param {boolean} shoot
 * @param {number} targetDistance
 * @param {number} slowDistance
 * @param {boolean} useNavMesh
 * @param {boolean} instantBlendToAim
 * @param {EFiringType} firingPatternHash
 */
export function taskGoToEntityWhileAimingAtCoord(ped: PedIndex, goToEntity: EntityIndex, aimAtCoordX: number, aimAtCoordY: number, aimAtCoordZ: number, moveBlendRatio: number, shoot: boolean, targetDistance: number = 0.5, slowDistance: number = 4, useNavMesh: boolean = true, instantBlendToAim: boolean = false, firingPatternHash: EFiringType | number = 957453492): void {
	const taskGoToEntityWhileAimingAtCoord_result = Citizen.invokeNative<void>('0x2868A36BD27FD939', ped, goToEntity, aimAtCoordX, aimAtCoordY, aimAtCoordZ, moveBlendRatio, shoot, targetDistance, slowDistance, useNavMesh, instantBlendToAim, firingPatternHash);
	return taskGoToEntityWhileAimingAtCoord_result;
}