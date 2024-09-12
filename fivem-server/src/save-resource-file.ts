/**
 * CFX:SAVE_RESOURCE_FILE
 *
 * 0xA09E7E7B

 * Writes the specified data to a file in the specified resource.Using a length of `-1` will automatically detect the length assuming the data is a C string.
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The name of the resource.
 * @param {string} fileName The name of the file.
 * @param {string} data The data to write to the file.
 * @param {number} dataLength The length of the written data.
 * @returns {boolean}  A value indicating if the write succeeded.
 */
export function saveResourceFile(resourceName: string, fileName: string, data: string, dataLength: number): boolean {
	const saveResourceFile_result = Citizen.invokeNative<boolean>('0xA09E7E7B', resourceName, fileName, data, dataLength);
	return saveResourceFile_result;
}