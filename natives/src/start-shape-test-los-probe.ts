import { EntityIndex, ShapetestIndex } from '@ivanzaida/structures'

/**
 * SHAPETEST:START_SHAPE_TEST_LOS_PROBE
 *
 * 0x120E577522852984

 * 
 * Returns SHAPETEST_INDEX of 0 if it fails to create the shapetest request (there is a limit to the number that can be in the system)
 * 
 * Asynchronously starts a line-of-sight (raycast) world probe shape test.
 * 
 * Use the handle with 0x3D87450E15D98694 or 0x65287525D951F6BE until it returns 0 or 2.
 * 
 * p8 is a bit mask with bits 1, 2 and/or 4, relating to collider types; 4 should usually be used.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} startPosX
 * @param {number} startPosY
 * @param {number} startPosZ
 * @param {number} endPosX
 * @param {number} endPosY
 * @param {number} endPosZ
 * @param {number} losFlags
 * @param {EntityIndex} excludeEntity
 * @param {number} options
 * @returns {ShapetestIndex}  
 */
export function startShapeTestLosProbe(startPosX: number, startPosY: number, startPosZ: number, endPosX: number, endPosY: number, endPosZ: number, losFlags: number = 1, excludeEntity: EntityIndex = null!, options: number = 7): ShapetestIndex {
	const startShapeTestLosProbe_result = Citizen.invokeNative<ShapetestIndex>('0x120E577522852984', startPosX, startPosY, startPosZ, endPosX, endPosY, endPosZ, losFlags, excludeEntity, options);
	return startShapeTestLosProbe_result;
}