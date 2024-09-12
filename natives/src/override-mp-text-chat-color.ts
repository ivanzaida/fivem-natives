import { EHudColours } from '@ivanzaida/structures'

/**
 * HUD:OVERRIDE_MP_TEXT_CHAT_COLOR
 *
 * 0x7F29E8664304CDA7

 * 
 * ------------------------------------------------------------------
 * @param {boolean} onOff
 * @param {EHudColours} hudColor
 */
export function overrideMpTextChatColor(onOff: boolean, hudColor: EHudColours | number = 1): void {
	const overrideMpTextChatColor_result = Citizen.invokeNative<void>('0x7F29E8664304CDA7', onOff, hudColor);
	return overrideMpTextChatColor_result;
}