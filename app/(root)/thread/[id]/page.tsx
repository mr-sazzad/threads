import ThreadCard from "@/components/cards/ThreadCard";
import Comment from "@/components/forms/Comment";
import { fetchThreadById } from "@/lib/actions/threads.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  if (!params.id) return null;
  const user = await currentUser();

  console.log("from thread", user);

  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  if (userInfo?.onboarded === false) redirect("/onboarding");

  const thread = await fetchThreadById(params.id);

  return (
    <section className="relative">
      <div>
        <ThreadCard
          key={thread?._id}
          id={thread?._id}
          currentUserId={user?.id as string}
          parentId={thread?.parentId}
          content={thread?.text}
          author={thread?.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      </div>
      <div className="mt-6">
        <Comment
          threadId={thread.id}
          currentUserImg={userInfo.image}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        {thread.children.map((childItem: any) => (
          <ThreadCard
            key={childItem?._id}
            id={childItem?._id}
            currentUserId={user?.id as string}
            parentId={childItem?.parentId}
            content={childItem?.text}
            author={childItem?.author}
            community={childItem.community}
            createdAt={childItem.createdAt}
            comments={childItem.children}
          />
        ))}
      </div>
    </section>
  );
};

export default Page;
