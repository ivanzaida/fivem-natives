/**
 * CFX:CREATE_RUNTIME_TEXTURE
 *
 * 0XFEC3766D

 * Creates a blank runtime texture.
 * 
 * ------------------------------------------------------------------
 * @param {number} txd A handle to the runtime TXD to create the runtime texture in.
 * @param {string} txn The name for the texture in the runtime texture dictionary.
 * @param {number} width The width of the new texture.
 * @param {number} height The height of the new texture.
 * @returns {number}  A runtime texture handle.
 */
export function createRuntimeTexture(txd: number, txn: string, width: number, height: number): number {
	const createRuntimeTexture_result = Citizen.invokeNative<number>('0XFEC3766D', txd, txn, width, height);
	return createRuntimeTexture_result;
}