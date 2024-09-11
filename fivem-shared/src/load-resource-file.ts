/**
 * CFX:LOAD_RESOURCE_FILE
 *
 * 0X76A9EE1F

 * Reads the contents of a text file in a specified resource.If executed on the client, this file has to be included in `files` in the resource manifest.Example: `local data = LoadResourceFile("devtools", "data.json")`
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The resource name.
 * @param {string} fileName The file in the resource.
 * @returns {string}  The file contents
 */
export function loadResourceFile(resourceName: string, fileName: string): string {
	const loadResourceFile_result = Citizen.invokeNative<string>('0X76A9EE1F', resourceName, fileName);
	return loadResourceFile_result;
}