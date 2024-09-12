/**
 * HUD:IS_HUD_PREFERENCE_SWITCHED_ON
 *
 * 0x5775F8AC61C2CAE1

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isHudPreferenceSwitchedOn(): boolean {
	const isHudPreferenceSwitchedOn_result = Citizen.invokeNative<boolean>('0x5775F8AC61C2CAE1', );
	return isHudPreferenceSwitchedOn_result;
}