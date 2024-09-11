import { EntityIndex, ShapetestIndex } from '@ivanzaida/structures'

/**
 * SHAPETEST:START_SHAPE_TEST_BOUNDING_BOX
 *
 * 0x33B15CA8B699DF5B

 * 
 * ------------------------------------------------------------------
 * @param {EntityIndex} entity
 * @param {number} losFlags
 * @param {number} options
 * @returns {ShapetestIndex}  
 */
export function startShapeTestBoundingBox(entity: EntityIndex, losFlags: number = 126, options: number = 4): ShapetestIndex {
	const startShapeTestBoundingBox_result = Citizen.invokeNative<ShapetestIndex>('0x33B15CA8B699DF5B', entity, losFlags, options);
	return startShapeTestBoundingBox_result;
}