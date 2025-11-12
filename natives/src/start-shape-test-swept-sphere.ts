import { EntityIndex, ShapetestIndex } from '@ivanzaida/structures'

/**
 * SHAPETEST:START_SHAPE_TEST_SWEPT_SPHERE
 *
 * 0x666853720ADE415D

 * 
 * Returns SHAPETEST_INDEX of 0 if it fails to create the shapetest request (there is a limit to the number that can be in the system)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scrVecPosX
 * @param {number} scrVecPosY
 * @param {number} scrVecPosZ
 * @param {number} scrVecEndPosX
 * @param {number} scrVecEndPosY
 * @param {number} scrVecEndPosZ
 * @param {number} radius
 * @param {number} losFlags
 * @param {EntityIndex} excludeEntity
 * @param {number} options
 * @returns {ShapetestIndex}  
 */
export function startShapeTestSweptSphere(scrVecPosX: number, scrVecPosY: number, scrVecPosZ: number, scrVecEndPosX: number, scrVecEndPosY: number, scrVecEndPosZ: number, radius: number, losFlags: number = 1, excludeEntity: EntityIndex = null!, options: number = 4): ShapetestIndex {
	const startShapeTestSweptSphere_result = Citizen.invokeNative<ShapetestIndex>('0x666853720ADE415D', scrVecPosX, scrVecPosY, scrVecPosZ, scrVecEndPosX, scrVecEndPosY, scrVecEndPosZ, radius, losFlags, excludeEntity, options);
	return startShapeTestSweptSphere_result;
}