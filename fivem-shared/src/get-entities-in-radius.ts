/**
 * CFX:GET_ENTITIES_IN_RADIUS
 *
 * 0xDFFBA12F

 * 
 * ------------------------------------------------------------------
 * @param {number} x The X coordinate.
 * @param {number} y The Y coordinate.
 * @param {number} z The Z coordinate.
 * @param {number} radius Max distance from coordinate to entity
 * @param {number} entityType Entity types see list below
 * @param {boolean} sortByDistance Sort output entites by distance from nearest to farthest
 * @param {number} models List of allowed models its also optional
 * @returns {number}  An array containing entity handles for each entity.
 */
export function getEntitiesInRadius(x: number, y: number, z: number, radius: number, entityType: number, sortByDistance: boolean, models: number): number[] {
	const getEntitiesInRadius_result = Citizen.invokeNative<number[]>('0xDFFBA12F', x, y, z, radius, entityType, sortByDistance, models, Citizen.resultAsObject());
	return getEntitiesInRadius_result;
}