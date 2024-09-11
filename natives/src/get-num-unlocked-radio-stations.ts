/**
 * AUDIO:GET_NUM_UNLOCKED_RADIO_STATIONS
 *
 * 0x8044961915B48136

 * 
 * ------------------------------------------------------------------
 * @returns {number}  
 */
export function getNumUnlockedRadioStations(): number {
	const getNumUnlockedRadioStations_result = Citizen.invokeNative<number>('0x8044961915B48136', );
	return getNumUnlockedRadioStations_result;
}