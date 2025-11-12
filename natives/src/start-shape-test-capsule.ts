import { EntityIndex, ShapetestIndex } from '@ivanzaida/structures'

/**
 * SHAPETEST:START_SHAPE_TEST_CAPSULE
 *
 * 0x26C582EF5CD8A3A2

 * 
 * Returns SHAPETEST_INDEX of 0 if it fails to create the shapetest request (there is a limit to the number that can be in the system)
 * 
 * Raycast from point to point, where the ray has a radius.
 * 
 * flags:
 * vehicles=10
 * peds =12
 * 
 * Iterating through flags yields many ped / vehicle/ object combinations
 * 
 * p9 = 7, but no idea what it does
 * 
 * Entity is an entity to ignore
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
export function startShapeTestCapsule(scrVecPosX: number, scrVecPosY: number, scrVecPosZ: number, scrVecEndPosX: number, scrVecEndPosY: number, scrVecEndPosZ: number, radius: number, losFlags: number = 1, excludeEntity: EntityIndex = null!, options: number = 4): ShapetestIndex {
	const startShapeTestCapsule_result = Citizen.invokeNative<ShapetestIndex>('0x26C582EF5CD8A3A2', scrVecPosX, scrVecPosY, scrVecPosZ, scrVecEndPosX, scrVecEndPosY, scrVecEndPosZ, radius, losFlags, excludeEntity, options);
	return startShapeTestCapsule_result;
}