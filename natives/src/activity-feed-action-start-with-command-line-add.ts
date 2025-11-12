/**
 * MISC:ACTIVITY_FEED_ACTION_START_WITH_COMMAND_LINE_ADD
 *
 * 0x1BB362CAE190AD06

 * 
 * Does nothing (it's a nullsub). Seems to be PS4 specific.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {string} commandLineString
 */
export function activityFeedActionStartWithCommandLineAdd(commandLineString: string): void {
	const activityFeedActionStartWithCommandLineAdd_result = Citizen.invokeNative<void>('0x1BB362CAE190AD06', commandLineString);
	return activityFeedActionStartWithCommandLineAdd_result;
}