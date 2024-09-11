export enum ESaveMigrationStatus {
	SmsNone, // This means we can start a check.
	SmsFailed,
	SmsCanceled,
	SmsSuccedded,
	SmsPending, // This means it is currently in progress.
	SmsSkipAccountAlreadyUsed, // This means this account already has been used in a save migration and we saved that info in the profile settings. Account is locked from further migrations so no need to check it anymore
	SmsSkipInvalidStatus, // This means there is an issue and the game is asserting (either not online of profile settings are not valid)
}