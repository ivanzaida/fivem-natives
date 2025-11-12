import { EntityIndex, ShapetestIndex } from '@ivanzaida/structures'

/**
 * SHAPETEST:START_EXPENSIVE_SYNCHRONOUS_SHAPE_TEST_LOS_PROBE
 *
 * 0x14C30F326F5883DA

 * 
 * Returns SHAPETEST_INDEX of 0 if it fails to create the shapetest request (there is a limit to the number that can be in the system)
 * WARNING  THIS COMMAND IS MUCH MORE EXPENSIVE THAN USING THE ASYNCHRONOUS VERSION (START_SHAPE_TEST_LOS_PROBE). PLEASE TRY THAT FIRST!
 * 
 * Does the same as 0x7EE9F5D83DD4F90E, except blocking until the shape test completes.
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
export function startExpensiveSynchronousShapeTestLosProbe(startPosX: number, startPosY: number, startPosZ: number, endPosX: number, endPosY: number, endPosZ: number, losFlags: number = 1, excludeEntity: EntityIndex = null!, options: number = 7): ShapetestIndex {
	const startExpensiveSynchronousShapeTestLosProbe_result = Citizen.invokeNative<ShapetestIndex>('0x14C30F326F5883DA', startPosX, startPosY, startPosZ, endPosX, endPosY, endPosZ, losFlags, excludeEntity, options);
	return startExpensiveSynchronousShapeTestLosProbe_result;
}