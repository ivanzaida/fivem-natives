/**
 * NETWORK:NETWORK_IS_ACTIVITY_SESSION
 *
 * 0x834C960822A4683F

 * These check the current setup of the main session. The main session will
 * still be marked as an activity session after launching via transition,
 * This is so that matchmaking can still distinguish between a general freemode
 * session and a transition launched session.
 * Check if it's an activity via NETWORK_IS_ACTIVITY_SESSION and change back to
 * freemode using NETWORK_MARK_AS_GAME_SESSION
 * 
 * ------------------------------------------------------------------
 * @returns {boolean}  
 */
export function networkIsActivitySession(): boolean {
	const networkIsActivitySession_result = Citizen.invokeNative<boolean>('0x834C960822A4683F', );
	return networkIsActivitySession_result;
}