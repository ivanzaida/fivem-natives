/**
 * CFX:SET_AUDIO_SUBMIX_OUTPUT_VOLUMES
 *
 * 0X825DC0D1

 * Sets the volumes for the sound channels in a submix effect.Values can be between 0.0 and 1.0.Channel 5 and channel 6 are not used in voice chat but are believed to be center and LFE channels.Output slot starts at 0 for the first ADD\_AUDIO\_SUBMIX\_OUTPUT call then incremented by 1 on each subsequent call.
 * 
 * ------------------------------------------------------------------
 * @param {number} submixId The submix.
 * @param {number} outputSlot The output slot index.
 * @param {number} frontLeftVolume The volume for the front left channel.
 * @param {number} frontRightVolume The volume for the front right channel.
 * @param {number} rearLeftVolume The volume for the rear left channel.
 * @param {number} rearRightVolume The volume for the rear right channel.
 * @param {number} channel5Volume The volume for channel 5.
 * @param {number} channel6Volume The volume for channel 6.
 */
export function setAudioSubmixOutputVolumes(submixId: number, outputSlot: number, frontLeftVolume: number, frontRightVolume: number, rearLeftVolume: number, rearRightVolume: number, channel5Volume: number, channel6Volume: number): void {
	const setAudioSubmixOutputVolumes_result = Citizen.invokeNative<void>('0X825DC0D1', submixId, outputSlot, frontLeftVolume, frontRightVolume, rearLeftVolume, rearRightVolume, channel5Volume, channel6Volume);
	return setAudioSubmixOutputVolumes_result;
}