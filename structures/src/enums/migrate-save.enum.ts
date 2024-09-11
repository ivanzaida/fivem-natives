export enum EMigrateSave {
	None,
	FailedSourceInUse, // The source account is currently in-use, must log out in order to transfer it.
	FailedAlreadyDone, // The source account has already been transferred elsewhere.
	FailedInProgress, // The source account is in the process of being transferred elsewhere.
	FailedUnlockAlreadyUsed, // (ConsumeContentUnlock) The source account has already been used to unlock this content for another account.
	FailedInsufficientPrivileges, // The account does not have sufficient privileges to migrate.
	FailedCheater, // Can not transfer due to being flagged as a cheater.
	FailedBanned, // Can not transfer due to the account being banned.
	FailedMaintenance, // Transfers are currently disabled for maintenance.
	FailedAcctCreationDate, // Transfer not allowed due to account being created after a certain date.
	FailedAcctAge, // Transfer not allowed due to account not being old enough.
	ErrorDestAlreadyDone, // Dest account has already been transferred to
	ErrorTooRich, // Source account isn't eligible for transfer because cash balances are too high
	Pending, // End of errors
	Finished,
	Failed, // Catch all error
}