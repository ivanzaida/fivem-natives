import { PedIndex, EntityIndex, EEnavScriptFlags, EFiringType } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_TO_COORD_WHILE_AIMING_AT_ENTITY
 *
 * 0xA68F93198FAC44EC

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} goToCoordX
 * @param {number} goToCoordY
 * @param {number} goToCoordZ
 * @param {EntityIndex} aimAtEntity
 * @param {number} moveBlendRatio
 * @param {boolean} shoot
 * @param {number} targetDistance
 * @param {number} slowDistance
 * @param {boolean} useNavMesh
 * @param {EEnavScriptFlags} navFlags
 * @param {boolean} instantBlendToAim
 * @param {EFiringType} firingPatternHash
 * @param {number} timer
 */
export function taskGoToCoordWhileAimingAtEntity(ped: PedIndex, goToCoordX: number, goToCoordY: number, goToCoordZ: number, aimAtEntity: EntityIndex, moveBlendRatio: number, shoot: boolean, targetDistance: number = 0.5, slowDistance: number = 4, useNavMesh: boolean = true, navFlags: EEnavScriptFlags | number = 0, instantBlendToAim: boolean = false, firingPatternHash: EFiringType | number = 957453492, timer: number = 20000): void {
	const taskGoToCoordWhileAimingAtEntity_result = Citizen.invokeNative<void>('0xA68F93198FAC44EC', ped, goToCoordX, goToCoordY, goToCoordZ, aimAtEntity, moveBlendRatio, shoot, targetDistance, slowDistance, useNavMesh, navFlags, instantBlendToAim, firingPatternHash, timer);
	return taskGoToCoordWhileAimingAtEntity_result;
}