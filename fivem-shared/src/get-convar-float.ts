/**
 * CFX:GET_CONVAR_FLOAT
 *
 * 0x9E666D

 * This will have floating point inaccuracy.
 * 
 * ------------------------------------------------------------------
 * @param {string} varName The console variable to get
 * @param {number} defaultValue The default value to set, if none are found.
 * @returns {number}  Returns the value set in varName, or `default` if none are specified
 */
export function getConvarFloat(varName: string, defaultValue: number): number {
	const getConvarFloat_result = Citizen.invokeNative<number>('0x9E666D', varName, defaultValue);
	return getConvarFloat_result;
}