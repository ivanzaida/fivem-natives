/**
 * AUDIO:GET_PLAYER_RADIO_STATION_GENRE
 *
 * 0x3BB0DC333050E9BD

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getPlayerRadioStationGenre(): number {
	const getPlayerRadioStationGenre_result = Citizen.invokeNative<number>('0x3BB0DC333050E9BD', );
	return getPlayerRadioStationGenre_result;
}