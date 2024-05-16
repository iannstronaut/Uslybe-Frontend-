import { Heart, Message2, Repeat } from "iconsax-react";

function PostCard() {
  return (
    <div className="bg-content drop-shadow-md rounded-2xl flex flex-col web:w-1/3 tablet:w-1/2 phone:w-full h-fit p-2 gap-2">
      <div className="flex items-center gap-2">
        <img
          src="https://forum-mgmp-arab.id/wp-content/uploads/2017/10/user9.jpg"
          alt="profile"
          className="rounded-full w-8"
        />
        <h1 className="text-sm font-medium">MasDeveloper123</h1>
      </div>
      <img
        src="https://img.freepik.com/premium-psd/landscape-mock-up-with-nature-view_23-2149732343.jpg"
        alt="post-picture"
        className="rounded-xl"
      />
      <p className="text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
        autem? Dolorem nisi recusandae asperiores harum! Numquam perferendis,
        nostrum debitis iusto eveniet ratione sed autem?
      </p>
      <div className="flex gap-2">
        <Heart size="24" color="#eeeeee" variant="Broken" />
        <Message2 size="16" color="#eeeeee" variant="Broken" />
        <Repeat size="24" color="#eeeeee" variant="Broken" />
      </div>
      <p className="text-xs font-light">16 april</p>
    </div>
  );
}

export { PostCard };
