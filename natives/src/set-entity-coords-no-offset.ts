import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_COORDS_NO_OFFSET
 *
 * 0x62C438C53BB57AFD

 * 
 * If you set the z component of VecNewCoors to INVALID_WORLD_Z  this command to automatically find the ground z for your entity if there is collision.
 * 
 * Axis - Invert Axis Flags
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} keepTasks
 * @param {boolean} keepIK
 * @param {boolean} doWarp Calling with the nondefault value of FALSE implies that the object has continuous motion and should not clear contacts nor space for itself.
 */
export function setEntityCoordsNoOffset(entity: EntityIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number, keepTasks: boolean = false, keepIK: boolean = false, doWarp: boolean = true): void {
	const setEntityCoordsNoOffset_result = Citizen.invokeNative<void>('0x62C438C53BB57AFD', entity, newCoorsX, newCoorsY, newCoorsZ, keepTasks, keepIK, doWarp);
	return setEntityCoordsNoOffset_result;
}