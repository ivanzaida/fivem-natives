import { FloatRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_FLOAT_TO_SAVE
 *
 * 0x3C17D57F8A1F4336

 * 
 * ------------------------------------------------------------------
 * @param {FloatRef} floatToSave [Ref]
 * @param {string} label
 */
export function registerFloatToSave(floatToSave: FloatRef /* ptr */, label: string): void {
	const registerFloatToSave_result = Citizen.invokeNative<void>('0x3C17D57F8A1F4336', floatToSave.dataView, label);
	return registerFloatToSave_result;
}