/**
 * AUDIO:SET_NEXT_RADIO_TRACK
 *
 * 0x709E956A8CB78CCA

 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {string} category
 * @param {string} contextName
 * @param {string} track
 */
export function setNextRadioTrack(radioStationName: string, category: string, contextName: string, track: string): void {
	const setNextRadioTrack_result = Citizen.invokeNative<void>('0x709E956A8CB78CCA', radioStationName, category, contextName, track);
	return setNextRadioTrack_result;
}