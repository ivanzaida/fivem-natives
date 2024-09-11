export enum ECutscenePlaybackFlags {
	CutsceneRequestedFromWidget = 1,
	CutsceneRequestedDirectlyFromSkip,
	CutsceneRequestedFromZSkip = 4,
	CutsceneRequestedInMission = 8,
	CutscenePlaybackForceLoadAudioEvent = 16, // HACK HACK HACK - see B* 3705257. In some rare cases in GTA it's possible for the load audio event to not get sent from the data, which can lead to the cutscene audio failing. This flag can be used to fix that problem in those specific cases. So far this is only for a single scene - bs_2b_mcs_3.
}