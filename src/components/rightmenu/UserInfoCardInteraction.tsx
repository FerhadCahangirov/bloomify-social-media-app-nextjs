const UserInfoCardInteraction = ({
    userId,
    isUserBlocked,
    isFollowing,
    isFollowingSent,
}: {
    userId: string;
    isUserBlocked: boolean;
    isFollowing: boolean;
    isFollowingSent: boolean;
}) => {
    return (
        <>
            <form >
                <button className="w-full bg-blue-500 text-white text-sm rounded-md p-2">
                    {isFollowing
                        ? "Following"
                        : isFollowingSent
                            ? "Friend Request Sent"
                            : "Follow"}
                </button>
            </form>
            <form className="self-end ">
                <button>
                    <span className="text-red-400 text-xs cursor-pointer">
                        {isUserBlocked ? "Unblock User" : "Block User"}
                    </span>
                </button>
            </form>
        </>
    )
}