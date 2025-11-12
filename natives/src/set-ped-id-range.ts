import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_ID_RANGE
 *
 * 0xC45887CFF81A1950

 * 
 * This command sets how far away a ped can identify the ped (as a friend/enemy etc)
 * E.g. If a ped spots a ped outside of the id range and can investigate suspicious peds.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 * @param {number} idRange
 */
export function setPedIdRange(ped: PedIndex, idRange: number): void {
	const setPedIdRange_result = Citizen.invokeNative<void>('0xC45887CFF81A1950', ped, idRange);
	return setPedIdRange_result;
}