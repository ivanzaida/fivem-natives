/**
 * CFX:SET_VISUAL_SETTING_FLOAT
 *
 * 0xD1D31681

 * Overrides a floating point value from `visualsettings.dat` temporarily.
 * 
 * ------------------------------------------------------------------
 * @param {string} name The name of the value to set, such as pedLight.color.red.
 * @param {number} value The value to write.
 */
export function setVisualSettingFloat(name: string, value: number): void {
	const setVisualSettingFloat_result = Citizen.invokeNative<void>('0xD1D31681', name, value);
	return setVisualSettingFloat_result;
}