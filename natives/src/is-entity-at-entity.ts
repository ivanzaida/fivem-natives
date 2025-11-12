import { EntityIndex, EPedTransportMode } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_AT_ENTITY
 *
 * 0xFAA48325A90263BE

 * 
 * Checks if the entity is in the area around a vehicle.
 * If the entity is a ped in a vehicle, then the coords of the vehicle are used in the check.
 * 
 * Checks if entity1 is within the box defined by x/y/zSize of entity2.
 * 
 * Last three parameters are almost alwasy p5 = 0, p6 = 1, p7 = 0
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {EntityIndex} targetEntity
 * @param {number} locDimensionsX
 * @param {number} locDimensionsY
 * @param {number} locDimensionsZ
 * @param {boolean} highlightArea
 * @param {boolean} do3dCheck
 * @param {EPedTransportMode} tmMode
 * @returns {boolean}  
 */
export function isEntityAtEntity(entity: EntityIndex, targetEntity: EntityIndex, locDimensionsX: number, locDimensionsY: number, locDimensionsZ: number, highlightArea: boolean = false, do3dCheck: boolean = true, tmMode: EPedTransportMode | number = 0): boolean {
	const isEntityAtEntity_result = Citizen.invokeNative<boolean>('0xFAA48325A90263BE', entity, targetEntity, locDimensionsX, locDimensionsY, locDimensionsZ, highlightArea, do3dCheck, tmMode);
	return isEntityAtEntity_result;
}