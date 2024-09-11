/**
 * VEHICLE:SWITCH_TRAIN_TRACK
 *
 * 0x43C8A7F0D458B663

 * Toggles whether random trains are created for the specified train track
 * Toggles whether ambient trains can spawn on the specified track or not
 * `trackId` is the internal id of the train track to switch.
 * `state` is whether ambient trains can spawn or not
 * trackIds
 * 0 (`trains1.dat`) Main track around SA
 * 1 (`trains2.dat`) Davis Quartz Quarry branch
 * 2 (`trains3.dat`) Second track alongside live track along Roy Lewenstein Blv.
 * 3 (`trains4.dat`) Metro track circuit
 * 4 (`trains5.dat`) Branch in Mirror Park Railyard
 * 5 (`trains6.dat`) Branch in Mirror Park Railyard
 * 6 (`trains7.dat`) LS branch to Mirror Park Railyard
 * 7 (`trains8.dat`) Overground part of metro track along Forum Dr.
 * 8 (`trains9.dat`) Branch to Mirror Park Railyard
 * 9 (`trains10.dat`) Yankton train
 * 10 (`trains11.dat`) Part of metro track near mission row
 * 11 (`trains12.dat`) Yankton prologue mission train
 * Full list of all train tracks + track nodes by DurtyFree https://github.com/DurtyFree/gta-v-data-dumps/blob/master/traintracks.json
 * 
 * ------------------------------------------------------------------
 * @param {number} track
 * @param {boolean} switchOn
 */
export function switchTrainTrack(track: number, switchOn: boolean): void {
	const switchTrainTrack_result = Citizen.invokeNative<void>('0x43C8A7F0D458B663', track, switchOn);
	return switchTrainTrack_result;
}