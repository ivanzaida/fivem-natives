/**
 * HUD:CLOSE_MP_TEXT_CHAT
 *
 * 0x0BD166E025AF0A14

 * 
 * ------------------------------------------------------------------
 */
export function closeMpTextChat(): void {
	const closeMpTextChat_result = Citizen.invokeNative<void>('0x0BD166E025AF0A14', );
	return closeMpTextChat_result;
}