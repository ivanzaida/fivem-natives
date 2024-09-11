export enum ECutsceneOptionFlags {
	CutsceneNoOptions,
	CutscenePlayerTargetable,
	CutsceneProcgrassForceHd,
	CutsceneDoNotRepositionPlayerToSceneOrigin = 4,
	CutsceneNoWidescreenBorders = 8,
	CutsceneDelayEnablingPlayerControlForUpToDateGameplayCamera = 16,
	CutsceneDoNotClearPickups = 32,
	CutsceneCreateObjectsAtSceneOrigin = 64,
	CutscenePlayerExitsInAVehicle = 128,
	CutscenePlayerFpFlashMichael = 256, // Use Michael's colour coded first person transition flash if exiting the cutscene into first person (rather than the neutral flash)
	CutscenePlayerFpFlashFranklin = 512, // Use Franklin's colour coded first person transition flash if exiting the cutscene into first person (rather than the neutral flash)
	CutscenePlayerFpFlashTrevor = 1024, // Use Trevor's colour coded first person transition flash if exiting the cutscene into first person (rather than the neutral flash)
	CutsceneSuppressFpTransitionFlash = 2048, // Disable the first person transition flash at the end of the cutscene (use to disable the auto flash if you're anbout to transition to a scripted cam, etc)
	CutsceneUseFpCameraBlendOutMode = 4096, // Allow the special first person only blend out mode when doing a standard camera blend back to first person mode.
	CutsceneExitsIntoCover = 8192, // Informs the cutscene that the player is exiting into cover, so we can disable the first person flash when appropriate.
}