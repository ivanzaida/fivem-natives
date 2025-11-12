/**
 * MISC:SET_FAKE_WANTED_LEVEL
 *
 * 0x50FB8785AFA2D59C

 * 
 * iWantedLevel is the amount of stars you wish to display on the HUD - NOTE this only shows the number of stars - it doesnt do anything with your 'real' wanted level or anything with any police.
 * It will only work if the real wanted level is 0, otherwise the real wanted level will override it.
 * 
 * Sets a visually fake wanted level on the user interface. Used by Rockstar's scripts to "override" regular wanted levels and make custom ones while the real wanted level and multipliers are still in effect.
 * 
 * Max is 6, anything above this makes it just 6. Also the mini-map gets the red & blue flashing effect.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} wantedLevel
 */
export function setFakeWantedLevel(wantedLevel: number): void {
	const setFakeWantedLevel_result = Citizen.invokeNative<void>('0x50FB8785AFA2D59C', wantedLevel);
	return setFakeWantedLevel_result;
}