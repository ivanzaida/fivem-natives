/**
 * HUD:SET_TEXT_DROPSHADOW
 *
 * 0xB91BC43E3A58E2C8

 * 
 * distance - shadow distance in pixels, both horizontal and vertical
 * r, g, b, a - color
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} dropAmount
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function setTextDropshadow(dropAmount: number, red: number, green: number, blue: number, alpha: number): void {
	const setTextDropshadow_result = Citizen.invokeNative<void>('0xB91BC43E3A58E2C8', dropAmount, red, green, blue, alpha);
	return setTextDropshadow_result;
}