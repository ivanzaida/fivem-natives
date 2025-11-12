import { ModelNames } from '@ivanzaida/structures'

/**
 * PED:SET_PED_MODEL_IS_SUPPRESSED
 *
 * 0xA1F44380A2D59F2B

 * 
 * Full list of peds by DurtyFree: https://github.com/DurtyFree/gta-v-data-dumps/blob/master/peds.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {ModelNames} pedModelHashKey
 * @param {boolean} surpressModel
 */
export function setPedModelIsSuppressed(pedModelHashKey: ModelNames, surpressModel: boolean): void {
	const setPedModelIsSuppressed_result = Citizen.invokeNative<void>('0xA1F44380A2D59F2B', pedModelHashKey, surpressModel);
	return setPedModelIsSuppressed_result;
}