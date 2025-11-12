import { EntityIndex, EPedTransportMode } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_AT_COORD
 *
 * 0x65FFA94B82A71741

 * 
 * Checks if the entity's root is located in the given area defined by a centre point and a locate size.
 * If the entity is a ped in a vehicle, then the coords of the vehicle are used in the check.
 * 
 * Checks if entity is within x/y/zSize distance of x/y/z.
 * 
 * Last three are unknown ints, almost always p7 = 0, p8 = 1, p9 = 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} locDimensionsX
 * @param {number} locDimensionsY
 * @param {number} locDimensionsZ
 * @param {boolean} highlightArea
 * @param {boolean} do3dCheck
 * @param {EPedTransportMode} tmMode
 * @returns {boolean}  
 */
export function isEntityAtCoord(entity: EntityIndex, coorsX: number, coorsY: number, coorsZ: number, locDimensionsX: number, locDimensionsY: number, locDimensionsZ: number, highlightArea: boolean = false, do3dCheck: boolean = true, tmMode: EPedTransportMode | number = 0): boolean {
	const isEntityAtCoord_result = Citizen.invokeNative<boolean>('0x65FFA94B82A71741', entity, coorsX, coorsY, coorsZ, locDimensionsX, locDimensionsY, locDimensionsZ, highlightArea, do3dCheck, tmMode);
	return isEntityAtCoord_result;
}