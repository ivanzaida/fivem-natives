/**
 * OBJECT:IS_ANY_OBJECT_NEAR_POINT
 *
 * 0x80F249EA6DFE8476

 * 
 * ------------------------------------------------------------------
 * @param {number} pointX
 * @param {number} pointY
 * @param {number} pointZ
 * @param {number} radius
 * @param {boolean} considerScriptCreatedObjectsOnly
 * @returns {boolean}  
 */
export function isAnyObjectNearPoint(pointX: number, pointY: number, pointZ: number, radius: number, considerScriptCreatedObjectsOnly: boolean = false): boolean {
	const isAnyObjectNearPoint_result = Citizen.invokeNative<boolean>('0x80F249EA6DFE8476', pointX, pointY, pointZ, radius, considerScriptCreatedObjectsOnly);
	return isAnyObjectNearPoint_result;
}