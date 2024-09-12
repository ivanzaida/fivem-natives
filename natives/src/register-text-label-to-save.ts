import { StringRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_TEXT_LABEL_TO_SAVE
 *
 * 0x062FF4ED33C1328C

 * 
 * ------------------------------------------------------------------
 * @param {StringRef} textLabelToSave [Ref]
 * @param {string} label
 */
export function registerTextLabelToSave(textLabelToSave: StringRef /* ptr */, label: string): void {
	const registerTextLabelToSave_result = Citizen.invokeNative<void>('0x062FF4ED33C1328C', textLabelToSave.dataView, label);
	return registerTextLabelToSave_result;
}