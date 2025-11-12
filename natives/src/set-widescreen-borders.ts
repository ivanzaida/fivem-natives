/**
 * CAM:SET_WIDESCREEN_BORDERS
 *
 * 0xD7C0EA10993D3214

 * 
 * Along with this hud scrolls off etc... to give a clean screen
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} set
 * @param {number} duration
 */
export function setWidescreenBorders(set: boolean, duration: number): void {
	const setWidescreenBorders_result = Citizen.invokeNative<void>('0xD7C0EA10993D3214', set, duration);
	return setWidescreenBorders_result;
}