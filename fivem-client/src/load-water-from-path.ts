/**
 * CFX:LOAD_WATER_FROM_PATH
 *
 * 0xF5102568

 * Define the xml in a resources fxmanifest, under the file(s) section.
 * 
 * ------------------------------------------------------------------
 * @param {string} resourceName The name of the resource containing your modified water definition
 * @param {string} fileName The name of the file
 * @returns {boolean}  Returns true on success.
 */
export function loadWaterFromPath(resourceName: string, fileName: string): boolean {
	const loadWaterFromPath_result = Citizen.invokeNative<boolean>('0xF5102568', resourceName, fileName);
	return loadWaterFromPath_result;
}