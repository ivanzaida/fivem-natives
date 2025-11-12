import { EEPreviousBriefOverride } from '@ivanzaida/structures'

/**
 * HUD:FORCE_NEXT_MESSAGE_TO_PREVIOUS_BRIEFS_LIST
 *
 * 0xC8B1536BA5FC0F03

 * 
 * Determines which of the two previous briefs screens (dialogue or god text) the next line of text will appear in
 * If the line of text wouldn't ordinarily have been added to either screen then it still won't appear in the previous briefs
 * 
 * 
 * ------------------------------------------------------------------
 * @param {EEPreviousBriefOverride} previousBriefsOverride
 */
export function forceNextMessageToPreviousBriefsList(previousBriefsOverride: EEPreviousBriefOverride | number): void {
	const forceNextMessageToPreviousBriefsList_result = Citizen.invokeNative<void>('0xC8B1536BA5FC0F03', previousBriefsOverride);
	return forceNextMessageToPreviousBriefsList_result;
}