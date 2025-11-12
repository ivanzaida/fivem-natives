import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_PLANE_CHASE
 *
 * 0x6793968E12D821E5

 * 
 * Tells a ped in a heli to chase an entity.  The ped must be in a heli.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} target
 * @param {number} targetOffsetX
 * @param {number} targetOffsetY
 * @param {number} targetOffsetZ
 */
export function taskPlaneChase(ped: PedIndex, target: EntityIndex, targetOffsetX: number, targetOffsetY: number, targetOffsetZ: number): void {
	const taskPlaneChase_result = Citizen.invokeNative<void>('0x6793968E12D821E5', ped, target, targetOffsetX, targetOffsetY, targetOffsetZ);
	return taskPlaneChase_result;
}