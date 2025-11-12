import { EntityIndex, EPedTransportMode } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_IN_AREA
 *
 * 0xFCEB38AB3EDCF9BE

 * 
 * Checks if a ped is in the axis aligned area defined by the two coords.
 * If the entity is a ped in a vehicle, then the coords of the vehicle are used in the check.
 * PARAM NOTES :
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} coors1X
 * @param {number} coors1Y
 * @param {number} coors1Z
 * @param {number} coors2X
 * @param {number} coors2Y
 * @param {number} coors2Z
 * @param {boolean} highlightArea
 * @param {boolean} do3dCheck
 * @param {EPedTransportMode} tmMode
 * @returns {boolean}  
 */
export function isEntityInArea(entity: EntityIndex, coors1X: number, coors1Y: number, coors1Z: number, coors2X: number, coors2Y: number, coors2Z: number, highlightArea: boolean = false, do3dCheck: boolean = true, tmMode: EPedTransportMode | number = 0): boolean {
	const isEntityInArea_result = Citizen.invokeNative<boolean>('0xFCEB38AB3EDCF9BE', entity, coors1X, coors1Y, coors1Z, coors2X, coors2Y, coors2Z, highlightArea, do3dCheck, tmMode);
	return isEntityInArea_result;
}