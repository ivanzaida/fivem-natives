/**
 * CFX:CREATE_RUNTIME_TEXTURE_FROM_IMAGE
 *
 * 0x786D8BC3

 * Creates a runtime texture from the specified file in the current resource or a base64 data URL.
 * 
 * ------------------------------------------------------------------
 * @param {number} txd A handle to the runtime TXD to create the runtime texture in.
 * @param {string} txn The name for the texture in the runtime texture dictionary.
 * @param {string} fileName The file name of an image to load or a base64 data URL. This should preferably be a PNG, and has to be specified as a file in the resource manifest.
 * @returns {number}  A runtime texture handle.
 */
export function createRuntimeTextureFromImage(txd: number, txn: string, fileName: string): number {
	const createRuntimeTextureFromImage_result = Citizen.invokeNative<number>('0x786D8BC3', txd, txn, fileName);
	return createRuntimeTextureFromImage_result;
}