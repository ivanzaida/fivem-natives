import { StringRef } from '@ivanzaida/structures'

/**
 * MISC:REGISTER_TEXT_LABEL_15_TO_SAVE
 *
 * 0x70972D3D43C1B5EB

 * 
 * MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f1, "tlPlateText");
 * MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f1C, "tlPlateText_pending");
 * MISC::REGISTER_TEXT_LABEL_15_TO_SAVE(&a_0._f10B, "tlCarAppPlateText");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {StringRef} textLabelToSave [Ref]
 * @param {string} label
 */
export function registerTextLabel_15ToSave(textLabelToSave: StringRef /* ptr */, label: string): void {
	const registerTextLabel_15ToSave_result = Citizen.invokeNative<void>('0x70972D3D43C1B5EB', textLabelToSave.dataView, label);
	return registerTextLabel_15ToSave_result;
}