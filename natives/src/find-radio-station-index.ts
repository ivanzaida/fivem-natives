/**
 * AUDIO:FIND_RADIO_STATION_INDEX
 *
 * 0xE029F4A956BFCCBE

 * 
 * ------------------------------------------------------------------
 * @param {number} stationNameHash
 * @returns {number}  
 */
export function findRadioStationIndex(stationNameHash: number): number {
	const findRadioStationIndex_result = Citizen.invokeNative<number>('0xE029F4A956BFCCBE', stationNameHash);
	return findRadioStationIndex_result;
}