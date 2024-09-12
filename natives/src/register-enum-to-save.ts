import { IntRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_ENUM_TO_SAVE
 *
 * 0x93C679A3AE20C964

 * 
 * ------------------------------------------------------------------
 * @param {IntRef} enumToSave [Ref]
 * @param {string} label
 */
export function registerEnumToSave(enumToSave: IntRef /* ptr */, label: string): void {
	const registerEnumToSave_result = Citizen.invokeNative<void>('0x93C679A3AE20C964', enumToSave.dataView, label);
	return registerEnumToSave_result;
}