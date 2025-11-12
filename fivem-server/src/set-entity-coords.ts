import { EntityIndex } from '@ivanzaida/structures'

/**
 * CFX:SET_ENTITY_COORDS
 *
 * 0xDF70B41B

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
 * @param {EntityIndex} entity The entity to change coordinates for.
 * @param {number} xPos The X coordinate.
 * @param {number} yPos The Y coordinate.
 * @param {number} zPos The Z coordinate, ground level.
 * @param {boolean} alive Unused by the game, potentially used by debug builds of GTA in order to assert whether or not an entity was alive.
 * @param {boolean} deadFlag Whether to disable physics for dead peds, too, and not just living peds.
 * @param {boolean} ragdollFlag A special flag used for ragdolling peds.
 * @param {boolean} clearArea Whether to clear any entities in the target area.
 */
export function setEntityCoords(entity: EntityIndex, xPos: number, yPos: number, zPos: number, alive: boolean, deadFlag: boolean, ragdollFlag: boolean, clearArea: boolean): void {
	const setEntityCoords_result = Citizen.invokeNative<void>('0xDF70B41B', entity, xPos, yPos, zPos, alive, deadFlag, ragdollFlag, clearArea);
	return setEntityCoords_result;
}