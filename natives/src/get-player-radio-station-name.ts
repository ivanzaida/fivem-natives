/**
 * AUDIO:GET_PLAYER_RADIO_STATION_NAME
 *
 * 0xA9CB3A11303C5801

 * 
 * Returns active radio station name
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {string}  
 */
export function getPlayerRadioStationName(): string {
	const getPlayerRadioStationName_result = Citizen.invokeNative<string>('0xA9CB3A11303C5801', );
	return getPlayerRadioStationName_result;
}