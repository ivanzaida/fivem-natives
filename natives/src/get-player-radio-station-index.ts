/**
 * AUDIO:GET_PLAYER_RADIO_STATION_INDEX
 *
 * 0xE1799BB6E4C1CDFB

 * 
 * Returns 255 (radio off index) if the function fails.
 * 
 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getPlayerRadioStationIndex(): number {
	const getPlayerRadioStationIndex_result = Citizen.invokeNative<number>('0xE1799BB6E4C1CDFB', );
	return getPlayerRadioStationIndex_result;
}