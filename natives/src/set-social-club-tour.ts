/**
 * HUD:SET_SOCIAL_CLUB_TOUR
 *
 * 0xDA24B54CF6C0E8B8

 * 
 * HUD::SET_SOCIAL_CLUB_TOUR("Gallery");
 * HUD::SET_SOCIAL_CLUB_TOUR("Missions");
 * HUD::SET_SOCIAL_CLUB_TOUR("General");
 * HUD::SET_SOCIAL_CLUB_TOUR("Playlists");
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} tour
 */
export function setSocialClubTour(tour: string): void {
	const setSocialClubTour_result = Citizen.invokeNative<void>('0xDA24B54CF6C0E8B8', tour);
	return setSocialClubTour_result;
}