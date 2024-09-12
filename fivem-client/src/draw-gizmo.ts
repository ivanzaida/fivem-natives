/**
 * CFX:DRAW_GIZMO
 *
 * 0xEB2EDCA2

 * Draws a gizmo. This function supports SDK infrastructure and is not intended to be used directly from your code.This should be used from JavaScript or another language supporting mutable buffers like ArrayBuffer.Matrix layout is as follows:- Element \[0], \[1] and \[2] should represent the right vector.- Element \[4], \[5] and \[6] should represent the forward vector.- Element \[8], \[9] and \[10] should represent the up vector.- Element \[12], \[13] and \[14] should represent X, Y and Z translation coordinates.- All other elements should be [0, 0, 0, 1].
 * 
 * ------------------------------------------------------------------
 * @param {number} matrixPtr A mutable pointer to a 64byte buffer of floatingpoint values, representing an XMFLOAT4X4 in layout.
 * @param {string} id A unique identifier of what the gizmo is affecting.
 * @returns {boolean}  Whether or not the matrix was modified.
 */
export function drawGizmo(matrixPtr: number, id: string): boolean {
	const drawGizmo_result = Citizen.invokeNative<boolean>('0xEB2EDCA2', matrixPtr, id);
	return drawGizmo_result;
}