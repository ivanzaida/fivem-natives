/**
 * CFX:GET_KILL_FALL_HEIGHT
 *
 * 0x57888D4C

 * A getter for [SET_KILL_FALL_HEIGHT](#_0x7E8D83E4).
 * 
 * ------------------------------------------------------------------
 * @returns {number}  Returns the height from which non-player peds will instantly die due to fall damage.  
The default value is `10.0`.
 */
export function getKillFallHeight(): number {
	const getKillFallHeight_result = Citizen.invokeNative<number>('0x57888D4C', );
	return getKillFallHeight_result;
}