/**
 * HUD:MP_TEXT_CHAT_IS_TEAM_JOB
 *
 * 0x5C381D09C558ACD0

 * 
 * ------------------------------------------------------------------
 * @param {boolean} isTeamJob
 */
export function mpTextChatIsTeamJob(isTeamJob: boolean): void {
	const mpTextChatIsTeamJob_result = Citizen.invokeNative<void>('0x5C381D09C558ACD0', isTeamJob);
	return mpTextChatIsTeamJob_result;
}