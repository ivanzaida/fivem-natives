import { PedIndex, EntityIndex, EFiringType } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_TO_ENTITY_WHILE_AIMING_AT_ENTITY
 *
 * 0x2433FB137DF847D2

 * 
 * shootatEntity:
 * If true, peds will shoot at Entity till it is dead.
 * If false, peds will just walk till they reach the entity and will cease shooting.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} goToEntity
 * @param {EntityIndex} aimAtEntity
 * @param {number} moveBlendRatio
 * @param {boolean} shoot
 * @param {number} targetDistance
 * @param {number} slowDistance
 * @param {boolean} useNavMesh
 * @param {boolean} instantBlendToAim
 * @param {EFiringType} firingPatternHash
 */
export function taskGoToEntityWhileAimingAtEntity(ped: PedIndex, goToEntity: EntityIndex, aimAtEntity: EntityIndex, moveBlendRatio: number, shoot: boolean, targetDistance: number = 0.5, slowDistance: number = 4, useNavMesh: boolean = true, instantBlendToAim: boolean = false, firingPatternHash: EFiringType | number = 957453492): void {
	const taskGoToEntityWhileAimingAtEntity_result = Citizen.invokeNative<void>('0x2433FB137DF847D2', ped, goToEntity, aimAtEntity, moveBlendRatio, shoot, targetDistance, slowDistance, useNavMesh, instantBlendToAim, firingPatternHash);
	return taskGoToEntityWhileAimingAtEntity_result;
}