import { EntityIndex, ShapetestIndex } from '@ivanzaida/structures'

/**
 * SHAPETEST:START_SHAPE_TEST_BOUND
 *
 * 0x09132751EA3609EE

 * 
 * Returns SHAPETEST_INDEX of 0 if it fails to create the shapetest request (there is a limit to the number that can be in the system)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} losFlags
 * @param {number} options
 * @returns {ShapetestIndex}  
 */
export function startShapeTestBound(entity: EntityIndex, losFlags: number = 1, options: number = 4): ShapetestIndex {
	const startShapeTestBound_result = Citizen.invokeNative<ShapetestIndex>('0x09132751EA3609EE', entity, losFlags, options);
	return startShapeTestBound_result;
}