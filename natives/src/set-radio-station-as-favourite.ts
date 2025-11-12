/**
 * AUDIO:SET_RADIO_STATION_AS_FAVOURITE
 *
 * 0x518DFEC4FCC07749

 * 
 * Mark a radio station as a favourite (by default, all stations are favourites). Setting the
 * flag to false will hide the radio station from the radio wheel
 * 
 * Doesn't have an effect in Story Mode.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @param {boolean} isFavourite
 */
export function setRadioStationAsFavourite(radioStationName: string, isFavourite: boolean): void {
	const setRadioStationAsFavourite_result = Citizen.invokeNative<void>('0x518DFEC4FCC07749', radioStationName, isFavourite);
	return setRadioStationAsFavourite_result;
}