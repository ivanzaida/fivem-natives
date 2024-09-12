/**
 * AUDIO:_ENABLE_DRAG_RACE_STATIONARY_WARNING_SOUNDS
 *
 * 0xBEFB80290414FD4F

 * 
 * ------------------------------------------------------------------
 */
export function enableDragRaceStationaryWarningSounds(): void {
	const enableDragRaceStationaryWarningSounds_result = Citizen.invokeNative<void>('0xBEFB80290414FD4F', );
	return enableDragRaceStationaryWarningSounds_result;
}