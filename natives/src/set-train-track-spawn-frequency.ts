/**
 * VEHICLE:SET_TRAIN_TRACK_SPAWN_FREQUENCY
 *
 * 0xB24E78BD1D1F9F3F

 * 
 * Specifies the maximum spawn frequency for trains on the specified track; trains will not be generated more frequently that this.
 * 
 * Only called once inside main_persitant with the parameters p0 = 0, p1 = 120000
 * 
 * trackIndex: 0 - 26
 * Full list of all train tracks + track nodes by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/traintracks.json
 * 
 * 
 * ------------------------------------------------------------------
 * @param {number} track
 * @param {number} timeMS
 */
export function setTrainTrackSpawnFrequency(track: number, timeMS: number): void {
	const setTrainTrackSpawnFrequency_result = Citizen.invokeNative<void>('0xB24E78BD1D1F9F3F', track, timeMS);
	return setTrainTrackSpawnFrequency_result;
}