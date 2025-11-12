/**
 * HUD:OVERRIDE_MP_TEXT_CHAT_TEAM_STRING
 *
 * 0xA9CB5BD48046EF42

 * 
 * Must be set before opening the text input box. Will automatically return to false once the text input box closes.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} overrideHash
 */
export function overrideMpTextChatTeamString(overrideHash: number): void {
	const overrideMpTextChatTeamString_result = Citizen.invokeNative<void>('0xA9CB5BD48046EF42', overrideHash);
	return overrideMpTextChatTeamString_result;
}