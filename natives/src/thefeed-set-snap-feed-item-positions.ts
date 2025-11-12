/**
 * HUD:THEFEED_SET_SNAP_FEED_ITEM_POSITIONS
 *
 * 0x2DDB2996437CC59C

 * 
 * Flags if the feed should snap feed items (TRUE), or if it should animate (FALSE) into position
 * This is currently only used for showing replay items on DPAD down (Because game speed is slowed down
 * during this, animations run at a slower speed and we want these items to appear immediatey)
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} set
 */
export function thefeedSetSnapFeedItemPositions(set: boolean): void {
	const thefeedSetSnapFeedItemPositions_result = Citizen.invokeNative<void>('0x2DDB2996437CC59C', set);
	return thefeedSetSnapFeedItemPositions_result;
}