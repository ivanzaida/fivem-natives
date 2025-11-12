/**
 * CFX:GET_VISUAL_SETTING_FLOAT
 *
 * 0x15346B4D

 * A getter for [SET_VISUAL_SETTING_FLOAT](#_0xD1D31681).
 * 
 * ------------------------------------------------------------------
 * @param {string} name The name of the value to get, such as pedLight.color.red.
 * @returns {number}  Returns the floating point value of the specified visual setting on success.
 */
export function getVisualSettingFloat(name: string): number {
	const getVisualSettingFloat_result = Citizen.invokeNative<number>('0x15346B4D', name);
	return getVisualSettingFloat_result;
}