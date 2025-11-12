/**
 * CUTSCENE:SET_CUTSCENE_FADE_VALUES
 *
 * 0x1837D912F4EDCA95

 * 
 * Please note calling this command will affect the behaviour when skipping.
 * If you call this you will have to make sure that the cutscene fades in at the end for both a skip and non skip, irrespective of any of  the values you have set.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} fadeOutAtStart
 * @param {boolean} fadeInAtStart
 * @param {boolean} fadeOutAtEnd
 * @param {boolean} fadeInAtEnd
 */
export function setCutsceneFadeValues(fadeOutAtStart: boolean = false, fadeInAtStart: boolean = false, fadeOutAtEnd: boolean = false, fadeInAtEnd: boolean = false): void {
	const setCutsceneFadeValues_result = Citizen.invokeNative<void>('0x1837D912F4EDCA95', fadeOutAtStart, fadeInAtStart, fadeOutAtEnd, fadeInAtEnd);
	return setCutsceneFadeValues_result;
}