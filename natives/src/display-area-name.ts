/**
 * HUD:DISPLAY_AREA_NAME
 *
 * 0x82BC6786EE477292

 * 
 * ------------------------------------------------------------------
 * @param {boolean} value
 */
export function displayAreaName(value: boolean): void {
	const displayAreaName_result = Citizen.invokeNative<void>('0x82BC6786EE477292', value);
	return displayAreaName_result;
}