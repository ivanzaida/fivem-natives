/**
 * CFX:CREATE_RUNTIME_TEXTURE_FROM_DUI_HANDLE
 *
 * 0xB135472B

 * Creates a runtime texture from a DUI handle.
 * 
 * ------------------------------------------------------------------
 * @param {number} txd A handle to the runtime TXD to create the runtime texture in.
 * @param {string} txn The name for the texture in the runtime texture dictionary.
 * @param {string} duiHandle The DUI handle returned from GET\_DUI\_HANDLE.
 * @returns {number}  The runtime texture handle.
 */
export function createRuntimeTextureFromDuiHandle(txd: number, txn: string, duiHandle: string): number {
	const createRuntimeTextureFromDuiHandle_result = Citizen.invokeNative<number>('0xB135472B', txd, txn, duiHandle);
	return createRuntimeTextureFromDuiHandle_result;
}