import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:SET_ENTITY_COORDS
 *
 * 0xB2BD5837A8D3CEDA

 * 
 * If you want to set the coords of a ped in a vehicle, use SET_PED_COORDS_KEEP_VEHICLE.
 * If you set the z component of VecNewCoors to INVALID_WORLD_Z  this command to automatically find the ground z for your entity if there is collision.
 * 
 * p7 is always 1 in the scripts. Set to 1, an area around the destination coords for the moved entity is cleared from other entities.
 * 
 * Often ends with 1, 0, 0, 1); in the scripts. It works.
 * 
 * Axis - Invert Axis Flags
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} newCoorsX
 * @param {number} newCoorsY
 * @param {number} newCoorsZ
 * @param {boolean} doDeadCheck If false then the command will not assert if the entity has not been checked for being dead
 * @param {boolean} keepTasks
 * @param {boolean} keepIK
 * @param {boolean} doWarp Calling with the nondefault value of FALSE implies that the object has continuous motion and should not clear contacts nor space for itself.
 */
export function setEntityCoords(entity: EntityIndex, newCoorsX: number, newCoorsY: number, newCoorsZ: number, doDeadCheck: boolean = true, keepTasks: boolean = false, keepIK: boolean = false, doWarp: boolean = true): void {
	const setEntityCoords_result = Citizen.invokeNative<void>('0xB2BD5837A8D3CEDA', entity, newCoorsX, newCoorsY, newCoorsZ, doDeadCheck, keepTasks, keepIK, doWarp);
	return setEntityCoords_result;
}