import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:THEFEED_SET_BACKGROUND_COLOR_FOR_NEXT_POST
 *
 * 0xE37CD12400926DE5

 * From the decompiled scripts:
 * HUD::THEFEED_SET_BACKGROUND_COLOR_FOR_NEXT_POST(6);
 * HUD::THEFEED_SET_BACKGROUND_COLOR_FOR_NEXT_POST(184);
 * HUD::THEFEED_SET_BACKGROUND_COLOR_FOR_NEXT_POST(190);
 * sets background color for the next notification
 * 6 = red
 * 184 = green
 * 190 = yellow
 * Here is a list of some colors that can be used: https://gyazo.com/68bd384455fceb0a85a8729e48216e15
 * 
 * ------------------------------------------------------------------
 * @param {EHudColours} color
 */
export function thefeedSetBackgroundColorForNextPost(color: EHudColours | number): void {
	const thefeedSetBackgroundColorForNextPost_result = Citizen.invokeNative<void>('0xE37CD12400926DE5', color);
	return thefeedSetBackgroundColorForNextPost_result;
}