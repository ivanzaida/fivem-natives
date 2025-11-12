/**
 * AUDIO:GET_RADIO_STATION_NAME
 *
 * 0x9A7254C20CB82B70

 * 
 * Converts radio station index to string. Use HUD::GET_FILENAME_FOR_AUDIO_CONVERSATION to get the user-readable text.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} station
 * @returns {string}  
 */
export function getRadioStationName(station: number): string {
	const getRadioStationName_result = Citizen.invokeNative<string>('0x9A7254C20CB82B70', station);
	return getRadioStationName_result;
}