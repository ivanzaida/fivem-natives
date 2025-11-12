/**
 * HUD:OPEN_SOCIAL_CLUB_MENU
 *
 * 0x20D7E34C22DC60AC

 * 
 * Uses the `SOCIAL_CLUB2` scaleform.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function openSocialClubMenu(): void {
	const openSocialClubMenu_result = Citizen.invokeNative<void>('0x20D7E34C22DC60AC', );
	return openSocialClubMenu_result;
}