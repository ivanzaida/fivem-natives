import { PedIndex, EEnavScriptFlags, EFiringType } from '@ivanzaida/structures'

/**
 * TASK:TASK_GO_TO_COORD_WHILE_AIMING_AT_COORD
 *
 * 0xB8551FB832F73124

 * 
 * movement_speed: mostly 2f, but also 1/1.2f, etc.
 * p8: always false
 * p9: 2f
 * p10: 0.5f
 * p11: true
 * p12: 0 / 512 / 513, etc.
 * p13: 0
 * firing_pattern: ${firing_pattern_full_auto}, 0xC6EE6B4C
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} goToCoordX
 * @param {number} goToCoordY
 * @param {number} goToCoordZ
 * @param {number} aimAtCoordX
 * @param {number} aimAtCoordY
 * @param {number} aimAtCoordZ
 * @param {number} moveBlendRatio
 * @param {boolean} shoot
 * @param {number} targetDistance
 * @param {number} slowDistance
 * @param {boolean} useNavMesh
 * @param {EEnavScriptFlags} navFlags
 * @param {boolean} instantBlendToAim
 * @param {EFiringType} firingPatternHash
 */
export function taskGoToCoordWhileAimingAtCoord(ped: PedIndex, goToCoordX: number, goToCoordY: number, goToCoordZ: number, aimAtCoordX: number, aimAtCoordY: number, aimAtCoordZ: number, moveBlendRatio: number, shoot: boolean, targetDistance: number = 0.5, slowDistance: number = 4, useNavMesh: boolean = true, navFlags: EEnavScriptFlags | number = 0, instantBlendToAim: boolean = false, firingPatternHash: EFiringType | number = 957453492): void {
	const taskGoToCoordWhileAimingAtCoord_result = Citizen.invokeNative<void>('0xB8551FB832F73124', ped, goToCoordX, goToCoordY, goToCoordZ, aimAtCoordX, aimAtCoordY, aimAtCoordZ, moveBlendRatio, shoot, targetDistance, slowDistance, useNavMesh, navFlags, instantBlendToAim, firingPatternHash);
	return taskGoToCoordWhileAimingAtCoord_result;
}