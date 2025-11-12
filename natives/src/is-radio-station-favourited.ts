/**
 * AUDIO:IS_RADIO_STATION_FAVOURITED
 *
 * 0x36759581D0633B06

 * 
 * Query whether a radio station is a favourite. Only stations that are both unlocked and favourited
 * will be disabled on the radio wheel
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} radioStationName
 * @returns {boolean}  
 */
export function isRadioStationFavourited(radioStationName: string): boolean {
	const isRadioStationFavourited_result = Citizen.invokeNative<boolean>('0x36759581D0633B06', radioStationName);
	return isRadioStationFavourited_result;
}