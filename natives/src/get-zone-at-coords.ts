import { PopzoneId } from '@ivanzaida/structures'

/**
 * ZONE:GET_ZONE_AT_COORDS
 *
 * 0x3348018F21E261AF

 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @returns {PopzoneId}  
 */
export function getZoneAtCoords(coorsX: number, coorsY: number, coorsZ: number): PopzoneId {
	const getZoneAtCoords_result = Citizen.invokeNative<PopzoneId>('0x3348018F21E261AF', coorsX, coorsY, coorsZ);
	return getZoneAtCoords_result;
}