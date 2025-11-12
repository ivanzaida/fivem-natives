/**
 * HUD:BEGIN_TEXT_COMMAND_THEFEED_POST
 *
 * 0xCCDB0041859B85A6

 * 
 * Begins the text command for "The Feed".
 * End with END_TEXT_COMMAND_THEFEED_POST_STATS, END_TEXT_COMMAND_THEFEED_POST_MESSAGETEXT, etc.
 * Use the standard string creation functionality detailed below before calling the "END_" function. ( eg ADD_TEXT_COMPONENT_FLOAT(...) )
 * 
 * Declares the entry type of a notification, for example "STRING".
 * 
 * int ShowNotification(char text)
 * {
 * 	BEGIN_TEXT_COMMAND_THEFEED_POST("STRING");
 * 	ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * 	return END_TEXT_COMMAND_THEFEED_POST_TICKER(1, 1);
 * }
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} mainTextLabel
 */
export function beginTextCommandThefeedPost(mainTextLabel: string): void {
	const beginTextCommandThefeedPost_result = Citizen.invokeNative<void>('0xCCDB0041859B85A6', mainTextLabel);
	return beginTextCommandThefeedPost_result;
}