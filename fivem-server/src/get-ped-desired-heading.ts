import { PedIndex } from '@ivanzaida/structures'

/**
 * CFX:GET_PED_DESIRED_HEADING
 *
 * 0xC182F76E

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped The target ped
 * @returns {number}  Returns ped's desired heading.
 */
export function getPedDesiredHeading(ped: PedIndex): number {
	const getPedDesiredHeading_result = Citizen.invokeNative<number>('0xC182F76E', ped);
	return getPedDesiredHeading_result;
}