import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs/server";

async function Page() {
  const user = await currentUser();

  const userInfo = {};

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    userName: userInfo?.userName || user?.userName,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20 ">
      <h1 className="head-text">Onboarding</h1>

      <p className="mt-3 text-base-regular text-lite-1 text-light-1">
        Complete your profile now to use Threads
      </p>

      <section className="mt-9 dg-dark-2 p-10 bg-dark-2 rounded">
        <AccountProfile user={userData} />
      </section>
    </main>
  );
}

export default Page;
