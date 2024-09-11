/**
 * NETWORK:USE_PLAYER_COLOUR_INSTEAD_OF_TEAM_COLOUR
 *
 * 0x5F27287D37B4D40D

 * 
 * ------------------------------------------------------------------
 * @param {boolean} active
 */
export function usePlayerColourInsteadOfTeamColour(active: boolean): void {
	const usePlayerColourInsteadOfTeamColour_result = Citizen.invokeNative<void>('0x5F27287D37B4D40D', active);
	return usePlayerColourInsteadOfTeamColour_result;
}