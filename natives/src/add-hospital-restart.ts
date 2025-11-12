import { HospitalRestartIndex } from '@ivanzaida/structures'

/**
 * MISC:ADD_HOSPITAL_RESTART
 *
 * 0x69A4491104E14366

 * 
 * Currently, a maximum of 10 of each type of restart point can be defined on the map, but this can be increased if necessary.
 * Z will be calculated automatically if you give it a value of –100.0 or below.
 * The player will also be given the correct heading when he is restarted.
 * 
 * Returns the index of the newly created hospital spawn point.
 * 
 * p3 might be radius?
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} heading
 * @param {number} whenToUse
 * @returns {HospitalRestartIndex}  
 */
export function addHospitalRestart(coorsX: number, coorsY: number, coorsZ: number, heading: number, whenToUse: number): HospitalRestartIndex {
	const addHospitalRestart_result = Citizen.invokeNative<HospitalRestartIndex>('0x69A4491104E14366', coorsX, coorsY, coorsZ, heading, whenToUse);
	return addHospitalRestart_result;
}