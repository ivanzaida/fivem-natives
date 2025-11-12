import { PoliceRestartIndex } from '@ivanzaida/structures'

/**
 * MISC:ADD_POLICE_RESTART
 *
 * 0xDFA763BBB6D72603

 * 
 * Currently, a maximum of 10 of each type of restart point can be defined on the map, but this can be increased if necessary.
 * Z will be calculated automatically if you give it a value of –100.0 or below.
 * The player will also be given the correct heading when he is restarted.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} coorsX
 * @param {number} coorsY
 * @param {number} coorsZ
 * @param {number} heading
 * @param {number} whenToUse
 * @returns {PoliceRestartIndex}  
 */
export function addPoliceRestart(coorsX: number, coorsY: number, coorsZ: number, heading: number, whenToUse: number): PoliceRestartIndex {
	const addPoliceRestart_result = Citizen.invokeNative<PoliceRestartIndex>('0xDFA763BBB6D72603', coorsX, coorsY, coorsZ, heading, whenToUse);
	return addPoliceRestart_result;
}