import { PedIndex, EntityIndex } from '@ivanzaida/structures'

/**
 * TASK:TASK_HELI_CHASE
 *
 * 0xBAA88971DB28023A

 * 
 * Tells a ped in a heli to chase an entity.  The ped must be in a heli.
 * 
 * Ped pilot should be in a heli.
 * EntityToFollow can be a vehicle or Ped.
 * 
 * x,y,z appear to be how close to the EntityToFollow the heli should be. Scripts use 0.0, 0.0, 80.0. Then the heli tries to position itself 80 units above the EntityToFollow. If you reduce it to -5.0, it tries to go below (if the EntityToFollow is a heli or plane)
 * 
 * 
 * NOTE: If the pilot finds enemies, it will engage them, then remain there idle, not continuing to chase the Entity given.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {EntityIndex} target
 * @param {number} targetOffsetX
 * @param {number} targetOffsetY
 * @param {number} targetOffsetZ
 */
export function taskHeliChase(ped: PedIndex, target: EntityIndex, targetOffsetX: number, targetOffsetY: number, targetOffsetZ: number): void {
	const taskHeliChase_result = Citizen.invokeNative<void>('0xBAA88971DB28023A', ped, target, targetOffsetX, targetOffsetY, targetOffsetZ);
	return taskHeliChase_result;
}