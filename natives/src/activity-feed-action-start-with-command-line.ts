/**
 * MISC:ACTIVITY_FEED_ACTION_START_WITH_COMMAND_LINE
 *
 * 0x1ECA72F56ADCE605

 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} commandLineString
 * @param {string} labelString
 */
export function activityFeedActionStartWithCommandLine(commandLineString: string, labelString: string): void {
	const activityFeedActionStartWithCommandLine_result = Citizen.invokeNative<void>('0x1ECA72F56ADCE605', commandLineString, labelString);
	return activityFeedActionStartWithCommandLine_result;
}