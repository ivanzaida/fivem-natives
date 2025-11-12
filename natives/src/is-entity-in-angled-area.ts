import { EntityIndex, EPedTransportMode } from '@ivanzaida/structures'

/**
 * ENTITY:IS_ENTITY_IN_ANGLED_AREA
 *
 * 0x5105BE70DEF1F5FB

 * 
 * Checks if a ped is in non axis aligned area, defined by coords of a face and distance between faces. More info..
 * If the entity is a ped in a vehicle, then the coords of the vehicle are used in the check.
 * 
 * `p8` is a debug flag invoking functions in the same path as ``DRAW_MARKER``
 * `p10` is some entity flag check, also used in `IS_ENTITY_AT_ENTITY`, `IS_ENTITY_IN_AREA`, and `IS_ENTITY_AT_COORD`.
 * See IS_POINT_IN_ANGLED_AREA for the definition of an angled area.
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
 * @param {number} areaWidth
 * @param {boolean} highlightArea
 * @param {boolean} do3dCheck
 * @param {EPedTransportMode} tmMode
 * @returns {boolean}  
 */
export function isEntityInAngledArea(entity: EntityIndex, coors1X: number, coors1Y: number, coors1Z: number, coors2X: number, coors2Y: number, coors2Z: number, areaWidth: number, highlightArea: boolean = false, do3dCheck: boolean = true, tmMode: EPedTransportMode | number = 0): boolean {
	const isEntityInAngledArea_result = Citizen.invokeNative<boolean>('0x5105BE70DEF1F5FB', entity, coors1X, coors1Y, coors1Z, coors2X, coors2Y, coors2Z, areaWidth, highlightArea, do3dCheck, tmMode);
	return isEntityInAngledArea_result;
}