import { EntityIndex } from '@ivanzaida/structures'

/**
 * MISC:IS_POINT_OBSCURED_BY_A_MISSION_ENTITY
 *
 * 0xD7813C7A74CA9AF9

 * 
 * ------------------------------------------------------------------
 * @param {number} centreCoorsX
 * @param {number} centreCoorsY
 * @param {number} centreCoorsZ
 * @param {number} locateDimensionsX
 * @param {number} locateDimensionsY
 * @param {number} locateDimensionsZ
 * @param {EntityIndex} excludeEntity
 * @returns {boolean}  
 */
export function isPointObscuredByAMissionEntity(centreCoorsX: number, centreCoorsY: number, centreCoorsZ: number, locateDimensionsX: number, locateDimensionsY: number, locateDimensionsZ: number, excludeEntity: EntityIndex = null!): boolean {
	const isPointObscuredByAMissionEntity_result = Citizen.invokeNative<boolean>('0xD7813C7A74CA9AF9', centreCoorsX, centreCoorsY, centreCoorsZ, locateDimensionsX, locateDimensionsY, locateDimensionsZ, excludeEntity);
	return isPointObscuredByAMissionEntity_result;
}