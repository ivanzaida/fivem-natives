/**
 * HUD:SET_RACE_TRACK_RENDER
 *
 * 0xF91F060344D298A3

 * 
 * Once a track has been defined using START_GPS_RACE_TRACK and a sequence of ADD_POINT_TO_GPS_RACE_TRACKs it can be rendered using this command.
 * When done with the race don't forget to call SET_RACE_TRACK_RENDER false (the mission cleanup also does this) or CLEAR_GPS_RACE_TRACK
 * When the race track is being displayed other trails that belong to blips are not displayed. The one that can be specified by the player in the front end will still work though.
 * 
 * 
 * ------------------------------------------------------------------
 * @param {boolean} on
 */
export function setRaceTrackRender(on: boolean): void {
	const setRaceTrackRender_result = Citizen.invokeNative<void>('0xF91F060344D298A3', on);
	return setRaceTrackRender_result;
}