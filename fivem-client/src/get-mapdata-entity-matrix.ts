/**
 * CFX:GET_MAPDATA_ENTITY_MATRIX
 *
 * 0X2C3CDA93

 * Returns mapdata's entity matrix. This function supports SDK infrastructure and is not intended to be used directly from your code.This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.Matrix layout is as follows:- Element \[0], \[1] and \[2] should represent the right vector.- Element \[4], \[5] and \[6] should represent the forward vector.- Element \[8], \[9] and \[10] should represent the up vector.- Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.- All other elements should be [0, 0, 0, 1].
 * 
 * ------------------------------------------------------------------
 * @param {number} mapDataHash A mapdata hash from mapDataLoaded event.
 * @param {number} entityInternalIdx
 * @param {number} matrixPtr A mutable pointer to a 64byte buffer of floatingpoint values, representing an XMFLOAT4X4 in layout.
 * @returns {boolean}  Whether or not the matrix was retrieved.
 */
export function getMapdataEntityMatrix(mapDataHash: number, entityInternalIdx: number, matrixPtr: number): boolean {
	const getMapdataEntityMatrix_result = Citizen.invokeNative<boolean>('0X2C3CDA93', mapDataHash, entityInternalIdx, matrixPtr);
	return getMapdataEntityMatrix_result;
}