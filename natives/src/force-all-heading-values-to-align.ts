import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:FORCE_ALL_HEADING_VALUES_TO_ALIGN
 *
 * 0xF62B077162F79BAA

 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function forceAllHeadingValuesToAlign(ped: PedIndex): void {
	const forceAllHeadingValuesToAlign_result = Citizen.invokeNative<void>('0xF62B077162F79BAA', ped);
	return forceAllHeadingValuesToAlign_result;
}