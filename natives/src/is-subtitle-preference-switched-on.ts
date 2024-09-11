/**
 * HUD:IS_SUBTITLE_PREFERENCE_SWITCHED_ON
 *
 * 0x5994A2F6D4FFFE4D

 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function isSubtitlePreferenceSwitchedOn(): boolean {
	const isSubtitlePreferenceSwitchedOn_result = Citizen.invokeNative<boolean>('0x5994A2F6D4FFFE4D', );
	return isSubtitlePreferenceSwitchedOn_result;
}