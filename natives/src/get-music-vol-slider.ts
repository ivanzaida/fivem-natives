/**
 * AUDIO:GET_MUSIC_VOL_SLIDER
 *
 * 0xC7E97C503E2ACEE9

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getMusicVolSlider(): number {
	const getMusicVolSlider_result = Citizen.invokeNative<number>('0xC7E97C503E2ACEE9', );
	return getMusicVolSlider_result;
}