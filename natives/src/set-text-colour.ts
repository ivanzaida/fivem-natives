/**
 * HUD:SET_TEXT_COLOUR
 *
 * 0x5A18938160AE52D0

 * 
 * colors you input not same as you think?
 * A: for some reason its R B G A
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} red
 * @param {number} green
 * @param {number} blue
 * @param {number} alpha
 */
export function setTextColour(red: number, green: number, blue: number, alpha: number): void {
	const setTextColour_result = Citizen.invokeNative<void>('0x5A18938160AE52D0', red, green, blue, alpha);
	return setTextColour_result;
}