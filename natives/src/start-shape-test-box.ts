import { EEulerRotOrder, EntityIndex, ShapetestIndex } from '@ivanzaida/structures'

/**
 * SHAPETEST:START_SHAPE_TEST_BOX
 *
 * 0xA86260972774CF88

 * 
 * Returns SHAPETEST_INDEX of 0 if it fails to create the shapetest request (there is a limit to the number that can be in the system)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} scrVecPosX
 * @param {number} scrVecPosY
 * @param {number} scrVecPosZ
 * @param {number} scrVecDimsX
 * @param {number} scrVecDimsY
 * @param {number} scrVecDimsZ
 * @param {number} eulerAnglesX
 * @param {number} eulerAnglesY
 * @param {number} eulerAnglesZ
 * @param {EEulerRotOrder} rotOrder
 * @param {number} losFlags
 * @param {EntityIndex} excludeEntity
 * @param {number} options
 * @returns {ShapetestIndex}  
 */
export function startShapeTestBox(scrVecPosX: number, scrVecPosY: number, scrVecPosZ: number, scrVecDimsX: number, scrVecDimsY: number, scrVecDimsZ: number, eulerAnglesX: number, eulerAnglesY: number, eulerAnglesZ: number, rotOrder: EEulerRotOrder | number = 2, losFlags: number = 1, excludeEntity: EntityIndex = null!, options: number = 4): ShapetestIndex {
	const startShapeTestBox_result = Citizen.invokeNative<ShapetestIndex>('0xA86260972774CF88', scrVecPosX, scrVecPosY, scrVecPosZ, scrVecDimsX, scrVecDimsY, scrVecDimsZ, eulerAnglesX, eulerAnglesY, eulerAnglesZ, rotOrder, losFlags, excludeEntity, options);
	return startShapeTestBox_result;
}