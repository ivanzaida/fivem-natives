export enum EVehicleRecordingPlaybackFlags {
	SwitchOnPlayerVehicleImpact = 1,
	SwitchOnAnyVehicleImpact,
	TurnOnEngineInstantly = 4, // Starts the engine instantly at the start of the car recording.
	TurnOnEngineIncludingStart = 8, // Starts the engine including the engine start audio.
	ContinueRecordingIfCarDestroyed = 16, // Keeps the recording playing if the car dies
}