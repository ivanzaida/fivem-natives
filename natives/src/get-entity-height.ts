import { EntityIndex } from '@ivanzaida/structures'

/**
 * ENTITY:GET_ENTITY_HEIGHT
 *
 * 0x12C7364D43F17CF1

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} positionX
 * @param {number} positionY
 * @param {number} positionZ
 * @param {boolean} isWorldPos
 * @param {boolean} wantWorldResult
 * @returns {number}  
 */
export function getEntityHeight(entity: EntityIndex, positionX: number, positionY: number, positionZ: number, isWorldPos: boolean, wantWorldResult: boolean): number {
	const getEntityHeight_result = Citizen.invokeNative<number>('0x12C7364D43F17CF1', entity, positionX, positionY, positionZ, isWorldPos, wantWorldResult);
	return getEntityHeight_result;
}