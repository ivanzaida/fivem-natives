export enum EScriptLookFlag {
	SlfDefault,
	SlfSlowTurnRate, // turn the head toward the target slowly
	SlfFastTurnRate, // turn the head toward the target quickly
	SlfExtendYawLimit = 4, // wide yaw head limits
	SlfExtendPitchLimit = 8, // wide pitch head limit
	SlfWidestYawLimit = 16, // widest yaw head limit
	SlfWidestPitchLimit = 32, // widest pitch head limit
	SlfNarrowYawLimit = 64, // narrow yaw head limits
	SlfNarrowPitchLimit = 128, // narrow pitch head limit
	SlfNarrowestYawLimit = 256, // narrowest yaw head limit
	SlfNarrowestPitchLimit = 512, // narrowest pitch head limit
	SlfUseTorso = 1024, // use the torso aswell as the neck and head (currently disabled)
	SlfWhileNotInFov = 2048, // keep tracking the target even if they are not in the hard coded FOV
	SlfUseCameraFocus = 4096, // use the camera as the target
	SlfUseEyesOnly = 8192, // only track the target with the eyes
	SlfUseLookDir = 16384, // use information in look dir DOF
	SlfFromScript = 32768, // internal use only
	SlfUseRefDirAbsolute = 65536, // use absolute reference direction mode for solver
}