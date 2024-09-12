import { IntRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_INT64_TO_SAVE
 *
 * 0x385F74AF4024D51A

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} intToSave [Ref]
 * @param {string} label
 */
export function registerInt64ToSave(intToSave: IntRef /* ptr */, label: string): void {
	const registerInt64ToSave_result = Citizen.invokeNative<void>('0x385F74AF4024D51A', intToSave.dataView, label);
	return registerInt64ToSave_result;
}