import { PedIndex } from '@ivanzaida/structures'

/**
 * PED:SET_PED_SCUBA_GEAR_VARIATION
 *
 * 0x07E6931DA4A9ACB6

 * 
 * This native sets a scuba mask for freemode models and an oxygen bottle for player_ models. It works on freemode and player_ models.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {PedIndex} ped
 */
export function setPedScubaGearVariation(ped: PedIndex): void {
	const setPedScubaGearVariation_result = Citizen.invokeNative<void>('0x07E6931DA4A9ACB6', ped);
	return setPedScubaGearVariation_result;
}