/**
 * STREAMING:SET_SCENE_STREAMING_TRACKS_CAM_POS_THIS_FRAME
 *
 * 0x3E09769A87E0D881

 * 
 * forces the spherical scene streamer to track with camera position rather than focus position, this frame only.
 * 
 * 
 * ------------------------------------------------------------------
 */
export function setSceneStreamingTracksCamPosThisFrame(): void {
	const setSceneStreamingTracksCamPosThisFrame_result = Citizen.invokeNative<void>('0x3E09769A87E0D881', );
	return setSceneStreamingTracksCamPosThisFrame_result;
}